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
    
      
      
    
      var element = document.getElementById("3d62ceac-886d-4a2c-b3e4-147f19bd30c2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3d62ceac-886d-4a2c-b3e4-147f19bd30c2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bb2e9b3e-2342-416a-b208-1eec4a04cfb2":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"above":[{"id":"17577"}],"below":[{"id":"17529"}],"center":[{"id":"17532"},{"id":"17536"}],"height":500,"left":[{"id":"17533"}],"output_backend":"webgl","renderers":[{"id":"17559"},{"id":"17564"},{"id":"17569"},{"id":"17574"},{"id":"17576"}],"title":{"id":"17580"},"toolbar":{"id":"17547"},"toolbar_location":null,"width":500,"x_range":{"id":"17521"},"x_scale":{"id":"17525"},"y_range":{"id":"17523"},"y_scale":{"id":"17527"}},"id":"17520","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"17545"}},"id":"17539","type":"BoxZoomTool"},{"attributes":{},"id":"17523","type":"DataRange1d"},{"attributes":{},"id":"17530","type":"BasicTicker"},{"attributes":{"data_source":{"id":"17561"},"glyph":{"id":"17562"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17563"},"view":{"id":"17565"}},"id":"17564","type":"GlyphRenderer"},{"attributes":{},"id":"17594","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17590"},"selection_policy":{"id":"17589"}},"id":"17556","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17571"},"glyph":{"id":"17572"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17573"},"view":{"id":"17575"}},"id":"17574","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"17578"},{"id":"17579"}],"location":"center_right","orientation":"horizontal"},"id":"17577","type":"Legend"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17587"},"major_label_policy":{"id":"17586"},"ticker":{"id":"17530"}},"id":"17529","type":"LinearAxis"},{"attributes":{"source":{"id":"17556"}},"id":"17560","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17563","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17546","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17594"},"selection_policy":{"id":"17593"}},"id":"17566","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17572","type":"Circle"},{"attributes":{},"id":"17589","type":"UnionRenderers"},{"attributes":{"text":"b"},"id":"17580","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17557","type":"Circle"},{"attributes":{},"id":"17542","type":"UndoTool"},{"attributes":{},"id":"17521","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17566"},"glyph":{"id":"17567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17568"},"view":{"id":"17570"}},"id":"17569","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17573","type":"Circle"},{"attributes":{},"id":"17534","type":"BasicTicker"},{"attributes":{},"id":"17596","type":"Selection"},{"attributes":{"data_source":{"id":"17556"},"glyph":{"id":"17557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17558"},"view":{"id":"17560"}},"id":"17559","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17558","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17596"},"selection_policy":{"id":"17595"}},"id":"17571","type":"ColumnDataSource"},{"attributes":{},"id":"17540","type":"WheelZoomTool"},{"attributes":{},"id":"17527","type":"LinearScale"},{"attributes":{"source":{"id":"17566"}},"id":"17570","type":"CDSView"},{"attributes":{},"id":"17583","type":"AllLabels"},{"attributes":{},"id":"17525","type":"LinearScale"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17574"},{"id":"17569"}]},"id":"17579","type":"LegendItem"},{"attributes":{},"id":"17592","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17592"},"selection_policy":{"id":"17591"}},"id":"17561","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17546"}},"id":"17541","type":"LassoSelectTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17559"},{"id":"17564"}]},"id":"17578","type":"LegendItem"},{"attributes":{},"id":"17595","type":"UnionRenderers"},{"attributes":{},"id":"17537","type":"ResetTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17576","type":"Span"},{"attributes":{"children":[{"id":"17602"},{"id":"17600"}]},"id":"17603","type":"Column"},{"attributes":{"source":{"id":"17561"}},"id":"17565","type":"CDSView"},{"attributes":{},"id":"17584","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17544","type":"HoverTool"},{"attributes":{"axis":{"id":"17529"},"ticker":null},"id":"17532","type":"Grid"},{"attributes":{},"id":"17586","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17545","type":"BoxAnnotation"},{"attributes":{},"id":"17538","type":"PanTool"},{"attributes":{},"id":"17543","type":"SaveTool"},{"attributes":{},"id":"17591","type":"UnionRenderers"},{"attributes":{},"id":"17587","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17568","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17562","type":"Line"},{"attributes":{"source":{"id":"17571"}},"id":"17575","type":"CDSView"},{"attributes":{"toolbars":[{"id":"17547"}],"tools":[{"id":"17537"},{"id":"17538"},{"id":"17539"},{"id":"17540"},{"id":"17541"},{"id":"17542"},{"id":"17543"},{"id":"17544"}]},"id":"17601","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"17601"},"toolbar_location":"above"},"id":"17602","type":"ToolbarBox"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17567","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"17537"},{"id":"17538"},{"id":"17539"},{"id":"17540"},{"id":"17541"},{"id":"17542"},{"id":"17543"},{"id":"17544"}]},"id":"17547","type":"Toolbar"},{"attributes":{"axis":{"id":"17533"},"dimension":1,"ticker":null},"id":"17536","type":"Grid"},{"attributes":{},"id":"17593","type":"UnionRenderers"},{"attributes":{},"id":"17590","type":"Selection"},{"attributes":{"children":[[{"id":"17520"},0,0]]},"id":"17600","type":"GridBox"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17584"},"major_label_policy":{"id":"17583"},"ticker":{"id":"17534"}},"id":"17533","type":"LinearAxis"}],"root_ids":["17603"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"bb2e9b3e-2342-416a-b208-1eec4a04cfb2","root_ids":["17603"],"roots":{"17603":"3d62ceac-886d-4a2c-b3e4-147f19bd30c2"}}];
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