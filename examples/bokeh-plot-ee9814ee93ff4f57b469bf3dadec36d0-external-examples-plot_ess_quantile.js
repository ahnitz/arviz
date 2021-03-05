(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("538e7396-715a-431f-8bf3-c56e74cc7363");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '538e7396-715a-431f-8bf3-c56e74cc7363' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"68e52ee9-6baf-47ad-93b8-2599065219b5":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"17801","type":"BasicTicker"},{"attributes":{"axis":{"id":"17800"},"ticker":null},"id":"17803","type":"Grid"},{"attributes":{"data_source":{"id":"17827"},"glyph":{"id":"17828"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17829"},"view":{"id":"17831"}},"id":"17830","type":"GlyphRenderer"},{"attributes":{},"id":"17837","type":"BasicTickFormatter"},{"attributes":{},"id":"17811","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17827"}},"id":"17831","type":"CDSView"},{"attributes":{},"id":"17814","type":"SaveTool"},{"attributes":{},"id":"17843","type":"Selection"},{"attributes":{"text":"sigma"},"id":"17833","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17843"},"selection_policy":{"id":"17842"}},"id":"17827","type":"ColumnDataSource"},{"attributes":{},"id":"17805","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"17808"},{"id":"17809"},{"id":"17810"},{"id":"17811"},{"id":"17812"},{"id":"17813"},{"id":"17814"},{"id":"17815"}]},"id":"17818","type":"Toolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17837"},"major_label_policy":{"id":"17836"},"ticker":{"id":"17805"}},"id":"17804","type":"LinearAxis"},{"attributes":{},"id":"17840","type":"BasicTickFormatter"},{"attributes":{},"id":"17813","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17840"},"major_label_policy":{"id":"17839"},"ticker":{"id":"17801"}},"id":"17800","type":"LinearAxis"},{"attributes":{"children":[{"id":"17849"},{"id":"17847"}]},"id":"17850","type":"Column"},{"attributes":{},"id":"17809","type":"PanTool"},{"attributes":{"callback":null},"id":"17815","type":"HoverTool"},{"attributes":{},"id":"17798","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17832","type":"Span"},{"attributes":{"axis":{"id":"17804"},"dimension":1,"ticker":null},"id":"17807","type":"Grid"},{"attributes":{},"id":"17842","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17817"}},"id":"17812","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17828","type":"Circle"},{"attributes":{},"id":"17808","type":"ResetTool"},{"attributes":{},"id":"17836","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17816","type":"BoxAnnotation"},{"attributes":{},"id":"17792","type":"DataRange1d"},{"attributes":{"overlay":{"id":"17816"}},"id":"17810","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17817","type":"PolyAnnotation"},{"attributes":{},"id":"17794","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"17848"},"toolbar_location":"above"},"id":"17849","type":"ToolbarBox"},{"attributes":{},"id":"17839","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"17818"}],"tools":[{"id":"17808"},{"id":"17809"},{"id":"17810"},{"id":"17811"},{"id":"17812"},{"id":"17813"},{"id":"17814"},{"id":"17815"}]},"id":"17848","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17829","type":"Circle"},{"attributes":{"children":[[{"id":"17791"},0,0]]},"id":"17847","type":"GridBox"},{"attributes":{"below":[{"id":"17800"}],"center":[{"id":"17803"},{"id":"17807"}],"height":500,"left":[{"id":"17804"}],"output_backend":"webgl","renderers":[{"id":"17830"},{"id":"17832"}],"title":{"id":"17833"},"toolbar":{"id":"17818"},"toolbar_location":null,"width":500,"x_range":{"id":"17792"},"x_scale":{"id":"17796"},"y_range":{"id":"17794"},"y_scale":{"id":"17798"}},"id":"17791","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17796","type":"LinearScale"}],"root_ids":["17850"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"68e52ee9-6baf-47ad-93b8-2599065219b5","root_ids":["17850"],"roots":{"17850":"538e7396-715a-431f-8bf3-c56e74cc7363"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();