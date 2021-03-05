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
    
      
      
    
      var element = document.getElementById("30298338-7956-4e12-b74d-9c8878a6a5e9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '30298338-7956-4e12-b74d-9c8878a6a5e9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b4cddede-8a7c-4132-bfbc-b629976f2d38":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"14224","type":"AllLabels"},{"attributes":{},"id":"14184","type":"DataRange1d"},{"attributes":{"axis":{"id":"14194"},"dimension":1,"ticker":null},"id":"14197","type":"Grid"},{"attributes":{"overlay":{"id":"14206"}},"id":"14200","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14207","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"14236"},"toolbar_location":"above"},"id":"14237","type":"ToolbarBox"},{"attributes":{},"id":"14191","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"14198"},{"id":"14199"},{"id":"14200"},{"id":"14201"},{"id":"14202"},{"id":"14203"},{"id":"14204"},{"id":"14205"}]},"id":"14208","type":"Toolbar"},{"attributes":{},"id":"14203","type":"UndoTool"},{"attributes":{"data_source":{"id":"14218"},"glyph":{"id":"14217"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14220"}},"id":"14219","type":"GlyphRenderer"},{"attributes":{},"id":"14230","type":"UnionRenderers"},{"attributes":{},"id":"14231","type":"Selection"},{"attributes":{},"id":"14199","type":"PanTool"},{"attributes":{},"id":"14201","type":"WheelZoomTool"},{"attributes":{},"id":"14228","type":"BasicTickFormatter"},{"attributes":{},"id":"14182","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"14208"}],"tools":[{"id":"14198"},{"id":"14199"},{"id":"14200"},{"id":"14201"},{"id":"14202"},{"id":"14203"},{"id":"14204"},{"id":"14205"}]},"id":"14236","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"14207"}},"id":"14202","type":"LassoSelectTool"},{"attributes":{},"id":"14198","type":"ResetTool"},{"attributes":{"axis":{"id":"14190"},"ticker":null},"id":"14193","type":"Grid"},{"attributes":{},"id":"14204","type":"SaveTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14217","type":"Scatter"},{"attributes":{"below":[{"id":"14190"}],"center":[{"id":"14193"},{"id":"14197"}],"height":288,"left":[{"id":"14194"}],"output_backend":"webgl","renderers":[{"id":"14219"}],"title":{"id":"14221"},"toolbar":{"id":"14208"},"toolbar_location":null,"width":432,"x_range":{"id":"14182"},"x_scale":{"id":"14186"},"y_range":{"id":"14184"},"y_scale":{"id":"14188"}},"id":"14181","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14225"},"major_label_policy":{"id":"14224"},"ticker":{"id":"14195"}},"id":"14194","type":"LinearAxis"},{"attributes":{"callback":null},"id":"14205","type":"HoverTool"},{"attributes":{"source":{"id":"14218"}},"id":"14220","type":"CDSView"},{"attributes":{},"id":"14188","type":"LinearScale"},{"attributes":{},"id":"14225","type":"BasicTickFormatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14231"},"selection_policy":{"id":"14230"}},"id":"14218","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14228"},"major_label_policy":{"id":"14227"},"ticker":{"id":"14191"}},"id":"14190","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14206","type":"BoxAnnotation"},{"attributes":{"text":"centered model - non centered model"},"id":"14221","type":"Title"},{"attributes":{},"id":"14195","type":"BasicTicker"},{"attributes":{},"id":"14227","type":"AllLabels"},{"attributes":{"children":[[{"id":"14181"},0,0]]},"id":"14235","type":"GridBox"},{"attributes":{},"id":"14186","type":"LinearScale"},{"attributes":{"children":[{"id":"14237"},{"id":"14235"}]},"id":"14238","type":"Column"}],"root_ids":["14238"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"b4cddede-8a7c-4132-bfbc-b629976f2d38","root_ids":["14238"],"roots":{"14238":"30298338-7956-4e12-b74d-9c8878a6a5e9"}}];
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