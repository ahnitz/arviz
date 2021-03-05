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
    
      
      
    
      var element = document.getElementById("fdac85e8-a832-4edc-bc88-dea7aa44279b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fdac85e8-a832-4edc-bc88-dea7aa44279b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1461cb48-a92a-44cf-9046-8164b62bff26":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"15044","type":"Selection"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15025","type":"Circle"},{"attributes":{"children":[{"id":"15052"},{"id":"15050"}]},"id":"15053","type":"Column"},{"attributes":{},"id":"14973","type":"LinearScale"},{"attributes":{"source":{"id":"15004"}},"id":"15008","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15021","type":"MultiLine"},{"attributes":{},"id":"15038","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15002","type":"FixedTicker"},{"attributes":{"toolbars":[{"id":"14993"}],"tools":[{"id":"14983"},{"id":"14984"},{"id":"14985"},{"id":"14986"},{"id":"14987"},{"id":"14988"},{"id":"14989"},{"id":"14990"}]},"id":"15051","type":"ProxyToolbar"},{"attributes":{},"id":"15037","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"15051"},"toolbar_location":"above"},"id":"15052","type":"ToolbarBox"},{"attributes":{},"id":"14976","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15014"},"glyph":{"id":"15015"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15016"},"view":{"id":"15018"}},"id":"15017","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"15033"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15032"},"ticker":{"id":"15002"}},"id":"14979","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15038"},"selection_policy":{"id":"15037"}},"id":"15004","type":"ColumnDataSource"},{"attributes":{},"id":"15032","type":"AllLabels"},{"attributes":{"source":{"id":"15014"}},"id":"15018","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14991","type":"BoxAnnotation"},{"attributes":{},"id":"15040","type":"Selection"},{"attributes":{"data_source":{"id":"15019"},"glyph":{"id":"15020"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15021"},"view":{"id":"15023"}},"id":"15022","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"14983"},{"id":"14984"},{"id":"14985"},{"id":"14986"},{"id":"14987"},{"id":"14988"},{"id":"14989"},{"id":"14990"}]},"id":"14993","type":"Toolbar"},{"attributes":{},"id":"15035","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"15019"}},"id":"15023","type":"CDSView"},{"attributes":{},"id":"15033","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15026","type":"Circle"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15005","type":"Scatter"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15010","type":"MultiLine"},{"attributes":{},"id":"14986","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"14975"}],"center":[{"id":"14978"},{"id":"14982"}],"height":500,"left":[{"id":"14979"}],"output_backend":"webgl","renderers":[{"id":"15007"},{"id":"15012"},{"id":"15017"},{"id":"15022"},{"id":"15027"},{"id":"15029"}],"title":{"id":"15031"},"toolbar":{"id":"14993"},"toolbar_location":null,"width":500,"x_range":{"id":"14967"},"x_scale":{"id":"14971"},"y_range":{"id":"14969"},"y_scale":{"id":"14973"}},"id":"14966","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15034","type":"AllLabels"},{"attributes":{},"id":"15039","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14990","type":"HoverTool"},{"attributes":{"overlay":{"id":"14992"}},"id":"14987","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14992","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15016","type":"Circle"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15015","type":"Circle"},{"attributes":{},"id":"15045","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15011","type":"MultiLine"},{"attributes":{},"id":"14983","type":"ResetTool"},{"attributes":{},"id":"14988","type":"UndoTool"},{"attributes":{"source":{"id":"15024"}},"id":"15028","type":"CDSView"},{"attributes":{},"id":"14984","type":"PanTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15040"},"selection_policy":{"id":"15039"}},"id":"15009","type":"ColumnDataSource"},{"attributes":{},"id":"15041","type":"UnionRenderers"},{"attributes":{},"id":"14967","type":"DataRange1d"},{"attributes":{"axis":{"id":"14979"},"dimension":1,"ticker":null},"id":"14982","type":"Grid"},{"attributes":{"axis_label":"Log","formatter":{"id":"15035"},"major_label_policy":{"id":"15034"},"ticker":{"id":"14976"}},"id":"14975","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15042"},"selection_policy":{"id":"15041"}},"id":"15014","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15006","type":"Scatter"},{"attributes":{},"id":"15042","type":"Selection"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15020","type":"MultiLine"},{"attributes":{"data_source":{"id":"15024"},"glyph":{"id":"15025"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15026"},"view":{"id":"15028"}},"id":"15027","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"14975"},"ticker":null},"id":"14978","type":"Grid"},{"attributes":{},"id":"14971","type":"LinearScale"},{"attributes":{"data_source":{"id":"15004"},"glyph":{"id":"15005"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15006"},"view":{"id":"15008"}},"id":"15007","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"14966"},0,0]]},"id":"15050","type":"GridBox"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15044"},"selection_policy":{"id":"15043"}},"id":"15019","type":"ColumnDataSource"},{"attributes":{},"id":"15031","type":"Title"},{"attributes":{},"id":"14989","type":"SaveTool"},{"attributes":{"data_source":{"id":"15009"},"glyph":{"id":"15010"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15011"},"view":{"id":"15013"}},"id":"15012","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15046"},"selection_policy":{"id":"15045"}},"id":"15024","type":"ColumnDataSource"},{"attributes":{},"id":"15046","type":"Selection"},{"attributes":{},"id":"15043","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"14991"}},"id":"14985","type":"BoxZoomTool"},{"attributes":{"source":{"id":"15009"}},"id":"15013","type":"CDSView"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15029","type":"Span"},{"attributes":{"end":0.5,"start":-1.5},"id":"14969","type":"DataRange1d"}],"root_ids":["15053"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"1461cb48-a92a-44cf-9046-8164b62bff26","root_ids":["15053"],"roots":{"15053":"fdac85e8-a832-4edc-bc88-dea7aa44279b"}}];
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