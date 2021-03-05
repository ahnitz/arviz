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
    
      
      
    
      var element = document.getElementById("47121718-2fe3-4f70-866c-8fa0748015c0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '47121718-2fe3-4f70-866c-8fa0748015c0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bd156020-13f5-46da-97de-78ddc4a463d3":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data_source":{"id":"35498"},"glyph":{"id":"35497"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35500"}},"id":"35499","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35489"}},"id":"35493","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35494","type":"Span"},{"attributes":{},"id":"35440","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35495","type":"Span"},{"attributes":{},"id":"35532","type":"AllLabels"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35527"},"selection_policy":{"id":"35526"}},"id":"35498","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35508","type":"Span"},{"attributes":{},"id":"35533","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"35501","type":"Title"},{"attributes":{"callback":null},"id":"35441","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35505","type":"Circle"},{"attributes":{},"id":"35524","type":"UnionRenderers"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35496","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35497","type":"Scatter"},{"attributes":{"source":{"id":"35498"}},"id":"35500","type":"CDSView"},{"attributes":{},"id":"35525","type":"Selection"},{"attributes":{"axis":{"id":"35430"},"dimension":1,"ticker":null},"id":"35433","type":"Grid"},{"attributes":{"source":{"id":"35503"}},"id":"35507","type":"CDSView"},{"attributes":{},"id":"35522","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35504","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35539"},"selection_policy":{"id":"35538"}},"id":"35503","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35512"},"glyph":{"id":"35511"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35514"}},"id":"35513","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"35547"},{"id":"35545"}]},"id":"35548","type":"Column"},{"attributes":{"overlay":{"id":"35443"}},"id":"35438","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35509","type":"Span"},{"attributes":{},"id":"35535","type":"AllLabels"},{"attributes":{"data_source":{"id":"35503"},"glyph":{"id":"35504"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35505"},"view":{"id":"35507"}},"id":"35506","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35490","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35491","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35541"},"selection_policy":{"id":"35540"}},"id":"35512","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35536"},"major_label_policy":{"id":"35535"},"ticker":{"id":"35463"}},"id":"35462","type":"LinearAxis"},{"attributes":{},"id":"35536","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"35456","type":"DataRange1d"},{"attributes":{"below":[{"id":"35462"}],"center":[{"id":"35465"},{"id":"35469"}],"height":500,"left":[{"id":"35466"}],"output_backend":"webgl","renderers":[{"id":"35506"},{"id":"35508"},{"id":"35509"},{"id":"35510"},{"id":"35513"}],"title":{"id":"35515"},"toolbar":{"id":"35480"},"toolbar_location":null,"width":500,"x_range":{"id":"35454"},"x_scale":{"id":"35458"},"y_range":{"id":"35456"},"y_scale":{"id":"35460"}},"id":"35453","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35533"},"major_label_policy":{"id":"35532"},"ticker":{"id":"35467"}},"id":"35466","type":"LinearAxis"},{"attributes":{},"id":"35458","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"35515","type":"Title"},{"attributes":{},"id":"35460","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35525"},"selection_policy":{"id":"35524"}},"id":"35489","type":"ColumnDataSource"},{"attributes":{},"id":"35526","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"35444"},{"id":"35480"}],"tools":[{"id":"35434"},{"id":"35435"},{"id":"35436"},{"id":"35437"},{"id":"35438"},{"id":"35439"},{"id":"35440"},{"id":"35441"},{"id":"35470"},{"id":"35471"},{"id":"35472"},{"id":"35473"},{"id":"35474"},{"id":"35475"},{"id":"35476"},{"id":"35477"}]},"id":"35546","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35510","type":"Span"},{"attributes":{"below":[{"id":"35426"}],"center":[{"id":"35429"},{"id":"35433"}],"height":500,"left":[{"id":"35430"}],"output_backend":"webgl","renderers":[{"id":"35492"},{"id":"35494"},{"id":"35495"},{"id":"35496"},{"id":"35499"}],"title":{"id":"35501"},"toolbar":{"id":"35444"},"toolbar_location":null,"width":500,"x_range":{"id":"35418"},"x_scale":{"id":"35422"},"y_range":{"id":"35420"},"y_scale":{"id":"35424"}},"id":"35417","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35519"},"major_label_policy":{"id":"35518"},"ticker":{"id":"35431"}},"id":"35430","type":"LinearAxis"},{"attributes":{},"id":"35463","type":"BasicTicker"},{"attributes":{"axis":{"id":"35462"},"ticker":null},"id":"35465","type":"Grid"},{"attributes":{},"id":"35527","type":"Selection"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35511","type":"Scatter"},{"attributes":{"source":{"id":"35512"}},"id":"35514","type":"CDSView"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35522"},"major_label_policy":{"id":"35521"},"ticker":{"id":"35427"}},"id":"35426","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"35546"},"toolbar_location":"above"},"id":"35547","type":"ToolbarBox"},{"attributes":{},"id":"35439","type":"UndoTool"},{"attributes":{"axis":{"id":"35466"},"dimension":1,"ticker":null},"id":"35469","type":"Grid"},{"attributes":{},"id":"35467","type":"BasicTicker"},{"attributes":{},"id":"35538","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"35478"}},"id":"35472","type":"BoxZoomTool"},{"attributes":{},"id":"35418","type":"DataRange1d"},{"attributes":{},"id":"35471","type":"PanTool"},{"attributes":{},"id":"35470","type":"ResetTool"},{"attributes":{},"id":"35539","type":"Selection"},{"attributes":{},"id":"35473","type":"WheelZoomTool"},{"attributes":{},"id":"35435","type":"PanTool"},{"attributes":{"overlay":{"id":"35479"}},"id":"35474","type":"LassoSelectTool"},{"attributes":{},"id":"35475","type":"UndoTool"},{"attributes":{},"id":"35454","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35478","type":"BoxAnnotation"},{"attributes":{},"id":"35434","type":"ResetTool"},{"attributes":{},"id":"35427","type":"BasicTicker"},{"attributes":{"overlay":{"id":"35442"}},"id":"35436","type":"BoxZoomTool"},{"attributes":{},"id":"35422","type":"LinearScale"},{"attributes":{},"id":"35424","type":"LinearScale"},{"attributes":{},"id":"35437","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35479","type":"PolyAnnotation"},{"attributes":{},"id":"35540","type":"UnionRenderers"},{"attributes":{},"id":"35431","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"35434"},{"id":"35435"},{"id":"35436"},{"id":"35437"},{"id":"35438"},{"id":"35439"},{"id":"35440"},{"id":"35441"}]},"id":"35444","type":"Toolbar"},{"attributes":{},"id":"35541","type":"Selection"},{"attributes":{"axis":{"id":"35426"},"ticker":null},"id":"35429","type":"Grid"},{"attributes":{},"id":"35518","type":"AllLabels"},{"attributes":{},"id":"35476","type":"SaveTool"},{"attributes":{},"id":"35519","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35477","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"35470"},{"id":"35471"},{"id":"35472"},{"id":"35473"},{"id":"35474"},{"id":"35475"},{"id":"35476"},{"id":"35477"}]},"id":"35480","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35442","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"35417"},0,0],[{"id":"35453"},0,1]]},"id":"35545","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35443","type":"PolyAnnotation"},{"attributes":{"end":1,"start":-0.05},"id":"35420","type":"DataRange1d"},{"attributes":{},"id":"35521","type":"AllLabels"},{"attributes":{"data_source":{"id":"35489"},"glyph":{"id":"35490"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35491"},"view":{"id":"35493"}},"id":"35492","type":"GlyphRenderer"}],"root_ids":["35548"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"bd156020-13f5-46da-97de-78ddc4a463d3","root_ids":["35548"],"roots":{"35548":"47121718-2fe3-4f70-866c-8fa0748015c0"}}];
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