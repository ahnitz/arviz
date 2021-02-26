# pylint: disable=arguments-differ
"""Base class for PyStan wrappers."""
from ..data import from_pystan
from .base import SamplingWrapper


class PyStanSamplingWrapper(SamplingWrapper):
    """PyStan sampling wrapper base class.

    See the documentation on  :class:`~arviz.SamplingWrapper` for a more detailed
    description. An example of ``PyStanSamplingWrapper`` usage can be found
    in the :ref:`pystan_refitting` notebook.

    Warnings
    --------
    Sampling wrappers are an experimental feature in a very early stage. Please use them
    with caution.
    """

    def sel_observations(self, idx):
        """Select a subset of the observations in idata_orig.

        **Not implemented**: This method must be implemented on a model basis.
        It is documented here to show its format and call signature.

        Parameters
        ----------
        idx
            Indexes to separate from the rest of the observed data.

        Returns
        -------
        modified_observed_data : dict
            Dictionary containing both excluded and included data but properly divided
            in the different keys. Passed to ``data`` argument of ``model.sampling``.
        excluded_observed_data : str
            Variable name containing the pointwise log likelihood data of the excluded
            data. As PyStan cannot call C++ functions and log_likelihood__i is already
            calculated *during* the simultion, instead of the value on which to evaluate
            the likelihood, ``log_likelihood__i`` expects a string so it can extract the
            corresponding data from the InferenceData object.
        """
        raise NotImplementedError("sel_observations must be implemented on a model basis")

    def sample(self, modified_observed_data):
        """Resample the PyStan model stored in self.model on modified_observed_data."""
        fit = self.model.sampling(data=modified_observed_data, **self.sample_kwargs)
        return fit

    def get_inference_data(self, fit):
        """Convert the fit object returned by ``self.sample`` to InferenceData."""
        idata = from_pystan(posterior=fit, **self.idata_kwargs)
        return idata

    def log_likelihood__i(self, excluded_obs_log_like, idata__i):
        """Retrieve the log likelihood of the excluded observations from ``idata__i``."""
        return idata__i.log_likelihood[excluded_obs_log_like]


class PyStan3SamplingWrapper(SamplingWrapper):
    """PyStan3 sampling wrapper base class.

    See the documentation on  :class:`~arviz.SamplingWrapper` for a more detailed
    description. An example of ``PyStan3SamplingWrapper`` usage can be found
    in the :ref:`pystan3_refitting` notebook.

    Warnings
    --------
    Sampling wrappers are an experimental feature in a very early stage. Please use them
    with caution.
    """

    def __init__(
        self,
        model_code,
        idata_orig=None,
        log_lik_fun=None,
        is_ufunc=True,
        posterior_vars=None,
        sample_kwargs=None,
        idata_kwargs=None,
        log_lik_kwargs=None,
        apply_ufunc_kwargs=None,
    ):
        self.model_code = model_code

        super().__init__(
            model=None,
            idata_orig=idata_orig,
            log_lik_fun=log_lik_fun,
            is_ufunc=is_ufunc,
            posterior_vars=posterior_vars,
            sample_kwargs=sample_kwargs,
            idata_kwargs=idata_kwargs,
            log_lik_kwargs=log_lik_kwargs,
            apply_ufunc_kwargs=apply_ufunc_kwargs,
        )

    def sel_observations(self, idx):
        """Select a subset of the observations in idata_orig.

        **Not implemented**: This method must be implemented on a model basis.
        It is documented here to show its format and call signature.

        Parameters
        ----------
        idx
            Indexes to separate from the rest of the observed data.

        Returns
        -------
        modified_observed_data : dict
            Dictionary containing both excluded and included data but properly divided
            in the different keys. Passed to ``data`` argument of ``model.sampling``.
        excluded_observed_data : str
            Variable name containing the pointwise log likelihood data of the excluded
            data. As PyStan cannot call C++ functions and log_likelihood__i is already
            calculated *during* the simultion, instead of the value on which to evaluate
            the likelihood, ``log_likelihood__i`` expects a string so it can extract the
            corresponding data from the InferenceData object.
        """
        raise NotImplementedError("sel_observations must be implemented on a model basis")

    def sample(self, modified_observed_data):
        """Resample the PyStan model stored in self.model on modified_observed_data."""
        import stan

        model = stan.build(self.model_code, data=modified_observed_data)
        fit = model.sample(**self.sample_kwargs)
        return fit

    def get_inference_data(self, fit):
        """Convert the fit object returned by ``self.sample`` to InferenceData."""
        idata = from_pystan(posterior=fit, **self.idata_kwargs)
        return idata

    def log_likelihood__i(self, excluded_obs_log_like, idata__i):
        """Retrieve the log likelihood of the excluded observations from ``idata__i``."""
        return idata__i.log_likelihood[excluded_obs_log_like]
