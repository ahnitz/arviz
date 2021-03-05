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
    
      
      
    
      var element = document.getElementById("e675786f-5516-44f3-9465-04dc7850222e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e675786f-5516-44f3-9465-04dc7850222e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b4b0e831-4c5c-485a-9537-f5baa9a75092":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data_source":{"id":"17941"},"glyph":{"id":"17942"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17943"},"view":{"id":"17945"}},"id":"17944","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18041"},"glyph":{"id":"18042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18043"},"view":{"id":"18045"}},"id":"18044","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18073"},"selection_policy":{"id":"18072"}},"id":"17946","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18081"},"selection_policy":{"id":"18080"}},"id":"17966","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"18062"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18061"},"ticker":{"id":"18055"}},"id":"17908","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18043","type":"Line"},{"attributes":{"source":{"id":"17931"}},"id":"17935","type":"CDSView"},{"attributes":{},"id":"18105","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18033","type":"Circle"},{"attributes":{},"id":"18089","type":"Selection"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18067"},"selection_policy":{"id":"18066"}},"id":"17931","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18046"}},"id":"18050","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17937","type":"Line"},{"attributes":{"axis":{"id":"17908"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"17911","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18047","type":"Circle"},{"attributes":{},"id":"17912","type":"ResetTool"},{"attributes":{"data":{},"selected":{"id":"18071"},"selection_policy":{"id":"18070"}},"id":"17941","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17966"},"glyph":{"id":"17967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17968"},"view":{"id":"17970"}},"id":"17969","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18064"},"major_label_policy":{"id":"18063"},"ticker":{"id":"17905"}},"id":"17904","type":"LinearAxis"},{"attributes":{"children":[[{"id":"17895"},0,0]]},"id":"18117","type":"GridBox"},{"attributes":{"source":{"id":"18041"}},"id":"18045","type":"CDSView"},{"attributes":{},"id":"18078","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17938","type":"Line"},{"attributes":{},"id":"18099","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"18107"},"selection_policy":{"id":"18106"}},"id":"18031","type":"ColumnDataSource"},{"attributes":{},"id":"18062","type":"BasicTickFormatter"},{"attributes":{},"id":"18066","type":"UnionRenderers"},{"attributes":{},"id":"18100","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17947","type":"Line"},{"attributes":{},"id":"17905","type":"BasicTicker"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18079"},"selection_policy":{"id":"18078"}},"id":"17961","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18037","type":"Line"},{"attributes":{},"id":"18085","type":"Selection"},{"attributes":{"data_source":{"id":"17936"},"glyph":{"id":"17937"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17938"},"view":{"id":"17940"}},"id":"17939","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18046"},"glyph":{"id":"18047"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18048"},"view":{"id":"18050"}},"id":"18049","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17946"},"glyph":{"id":"17947"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17948"},"view":{"id":"17950"}},"id":"17949","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18042","type":"Line"},{"attributes":{"source":{"id":"17946"}},"id":"17950","type":"CDSView"},{"attributes":{"data_source":{"id":"18031"},"glyph":{"id":"18032"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18033"},"view":{"id":"18035"}},"id":"18034","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17948","type":"Line"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"17994"},{"id":"17999"},{"id":"18004"},{"id":"18009"},{"id":"18014"},{"id":"18019"},{"id":"18024"},{"id":"18029"},{"id":"18034"},{"id":"18039"},{"id":"18044"},{"id":"18049"}]},"id":"18059","type":"LegendItem"},{"attributes":{},"id":"18101","type":"Selection"},{"attributes":{"axis":{"id":"17904"},"ticker":null},"id":"17907","type":"Grid"},{"attributes":{},"id":"18063","type":"AllLabels"},{"attributes":{},"id":"18083","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18048","type":"Circle"},{"attributes":{},"id":"18061","type":"AllLabels"},{"attributes":{},"id":"18102","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17961"},"glyph":{"id":"17962"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17963"},"view":{"id":"17965"}},"id":"17964","type":"GlyphRenderer"},{"attributes":{},"id":"18064","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"18118"},"toolbar_location":"above"},"id":"18119","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18038","type":"Line"},{"attributes":{},"id":"18103","type":"Selection"},{"attributes":{"source":{"id":"17961"}},"id":"17965","type":"CDSView"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"17934"},{"id":"17939"},{"id":"17944"},{"id":"17949"},{"id":"17954"},{"id":"17959"},{"id":"17964"},{"id":"17969"},{"id":"17974"},{"id":"17979"},{"id":"17984"},{"id":"17989"}]},"id":"18058","type":"LegendItem"},{"attributes":{},"id":"18067","type":"Selection"},{"attributes":{},"id":"18079","type":"Selection"},{"attributes":{"source":{"id":"17966"}},"id":"17970","type":"CDSView"},{"attributes":{"source":{"id":"17936"}},"id":"17940","type":"CDSView"},{"attributes":{"source":{"id":"18036"}},"id":"18040","type":"CDSView"},{"attributes":{},"id":"18088","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17922"}],"tools":[{"id":"17912"},{"id":"17913"},{"id":"17914"},{"id":"17915"},{"id":"17916"},{"id":"17917"},{"id":"17918"},{"id":"17919"}]},"id":"18118","type":"ProxyToolbar"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18069"},"selection_policy":{"id":"18068"}},"id":"17936","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18111"},"selection_policy":{"id":"18110"}},"id":"18041","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17941"}},"id":"17945","type":"CDSView"},{"attributes":{},"id":"18106","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17943","type":"Circle"},{"attributes":{},"id":"18082","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18058"},{"id":"18059"}]},"id":"18057","type":"Legend"},{"attributes":{},"id":"18087","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17968","type":"Line"},{"attributes":{},"id":"18104","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17942","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17967","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18113"},"selection_policy":{"id":"18112"}},"id":"18046","type":"ColumnDataSource"},{"attributes":{},"id":"18081","type":"Selection"},{"attributes":{},"id":"18098","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17963","type":"Line"},{"attributes":{},"id":"18080","type":"UnionRenderers"},{"attributes":{},"id":"18086","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17962","type":"Line"},{"attributes":{"source":{"id":"18031"}},"id":"18035","type":"CDSView"},{"attributes":{},"id":"18084","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17921","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17953","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18018","type":"Circle"},{"attributes":{},"id":"18076","type":"UnionRenderers"},{"attributes":{},"id":"18095","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"18083"},"selection_policy":{"id":"18082"}},"id":"17971","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17951"}},"id":"17955","type":"CDSView"},{"attributes":{"source":{"id":"18006"}},"id":"18010","type":"CDSView"},{"attributes":{},"id":"18090","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17983","type":"Line"},{"attributes":{},"id":"18073","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17978","type":"Line"},{"attributes":{"callback":null},"id":"17919","type":"HoverTool"},{"attributes":{"data_source":{"id":"17956"},"glyph":{"id":"17957"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17958"},"view":{"id":"17960"}},"id":"17959","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17996"}},"id":"18000","type":"CDSView"},{"attributes":{},"id":"18096","type":"UnionRenderers"},{"attributes":{},"id":"17900","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17920","type":"BoxAnnotation"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17977","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"17912"},{"id":"17913"},{"id":"17914"},{"id":"17915"},{"id":"17916"},{"id":"17917"},{"id":"17918"},{"id":"17919"}]},"id":"17922","type":"Toolbar"},{"attributes":{},"id":"18074","type":"UnionRenderers"},{"attributes":{},"id":"18110","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18017","type":"Circle"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18109"},"selection_policy":{"id":"18108"}},"id":"18036","type":"ColumnDataSource"},{"attributes":{},"id":"18092","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18103"},"selection_policy":{"id":"18102"}},"id":"18021","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17971"}},"id":"17975","type":"CDSView"},{"attributes":{},"id":"18068","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17958","type":"Circle"},{"attributes":{"source":{"id":"17981"}},"id":"17985","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18085"},"selection_policy":{"id":"18084"}},"id":"17976","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18027","type":"Line"},{"attributes":{"data_source":{"id":"17986"},"glyph":{"id":"17987"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17988"},"view":{"id":"17990"}},"id":"17989","type":"GlyphRenderer"},{"attributes":{},"id":"17902","type":"LinearScale"},{"attributes":{"data_source":{"id":"17931"},"glyph":{"id":"17932"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17933"},"view":{"id":"17935"}},"id":"17934","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17951"},"glyph":{"id":"17952"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17953"},"view":{"id":"17955"}},"id":"17954","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18036"},"glyph":{"id":"18037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18038"},"view":{"id":"18040"}},"id":"18039","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18003","type":"Circle"},{"attributes":{},"id":"18070","type":"UnionRenderers"},{"attributes":{},"id":"17917","type":"UndoTool"},{"attributes":{"data_source":{"id":"17971"},"glyph":{"id":"17972"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17973"},"view":{"id":"17975"}},"id":"17974","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17998","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18089"},"selection_policy":{"id":"18088"}},"id":"17986","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18006"},"glyph":{"id":"18007"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18008"},"view":{"id":"18010"}},"id":"18009","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17956"}},"id":"17960","type":"CDSView"},{"attributes":{"source":{"id":"18026"}},"id":"18030","type":"CDSView"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18105"},"selection_policy":{"id":"18104"}},"id":"18026","type":"ColumnDataSource"},{"attributes":{},"id":"17918","type":"SaveTool"},{"attributes":{"source":{"id":"17986"}},"id":"17990","type":"CDSView"},{"attributes":{"source":{"id":"18016"}},"id":"18020","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17993","type":"Line"},{"attributes":{"data_source":{"id":"18021"},"glyph":{"id":"18022"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18023"},"view":{"id":"18025"}},"id":"18024","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18011"},"glyph":{"id":"18012"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18013"},"view":{"id":"18015"}},"id":"18014","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18091"},"selection_policy":{"id":"18090"}},"id":"17991","type":"ColumnDataSource"},{"attributes":{},"id":"18113","type":"Selection"},{"attributes":{},"id":"17915","type":"WheelZoomTool"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18099"},"selection_policy":{"id":"18098"}},"id":"18011","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17973","type":"Circle"},{"attributes":{"data_source":{"id":"17996"},"glyph":{"id":"17997"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17998"},"view":{"id":"18000"}},"id":"17999","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18075"},"selection_policy":{"id":"18074"}},"id":"17951","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18053","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18002","type":"Circle"},{"attributes":{},"id":"18112","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18095"},"selection_policy":{"id":"18094"}},"id":"18001","type":"ColumnDataSource"},{"attributes":{},"id":"18109","type":"Selection"},{"attributes":{"data_source":{"id":"17981"},"glyph":{"id":"17982"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17983"},"view":{"id":"17985"}},"id":"17984","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17992","type":"Line"},{"attributes":{"ticks":[1.275]},"id":"18055","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18032","type":"Circle"},{"attributes":{},"id":"18077","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17982","type":"Line"},{"attributes":{"data_source":{"id":"18016"},"glyph":{"id":"18017"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18018"},"view":{"id":"18020"}},"id":"18019","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17976"},"glyph":{"id":"17977"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17978"},"view":{"id":"17980"}},"id":"17979","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17997","type":"Line"},{"attributes":{"overlay":{"id":"17920"}},"id":"17914","type":"BoxZoomTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18007","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18077"},"selection_policy":{"id":"18076"}},"id":"17956","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18023","type":"Line"},{"attributes":{"data_source":{"id":"17991"},"glyph":{"id":"17992"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17993"},"view":{"id":"17995"}},"id":"17994","type":"GlyphRenderer"},{"attributes":{"text":"94.0% HDI"},"id":"18051","type":"Title"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18097"},"selection_policy":{"id":"18096"}},"id":"18006","type":"ColumnDataSource"},{"attributes":{},"id":"18094","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18028","type":"Line"},{"attributes":{"children":[{"id":"18119"},{"id":"18117"}]},"id":"18120","type":"Column"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18012","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17957","type":"Circle"},{"attributes":{},"id":"18108","type":"UnionRenderers"},{"attributes":{},"id":"18071","type":"Selection"},{"attributes":{"overlay":{"id":"17921"}},"id":"17916","type":"LassoSelectTool"},{"attributes":{"data":{},"selected":{"id":"18101"},"selection_policy":{"id":"18100"}},"id":"18016","type":"ColumnDataSource"},{"attributes":{},"id":"18069","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18054","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18013","type":"Line"},{"attributes":{},"id":"17913","type":"PanTool"},{"attributes":{"data_source":{"id":"18026"},"glyph":{"id":"18027"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18028"},"view":{"id":"18030"}},"id":"18029","type":"GlyphRenderer"},{"attributes":{},"id":"18072","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17988","type":"Circle"},{"attributes":{},"id":"18097","type":"Selection"},{"attributes":{"source":{"id":"17991"}},"id":"17995","type":"CDSView"},{"attributes":{"source":{"id":"18001"}},"id":"18005","type":"CDSView"},{"attributes":{},"id":"18111","type":"Selection"},{"attributes":{},"id":"18091","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17972","type":"Circle"},{"attributes":{},"id":"18093","type":"Selection"},{"attributes":{"below":[{"id":"17904"}],"center":[{"id":"17907"},{"id":"17911"}],"height":435,"left":[{"id":"17908"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"17934"},{"id":"17939"},{"id":"17944"},{"id":"17949"},{"id":"17954"},{"id":"17959"},{"id":"17964"},{"id":"17969"},{"id":"17974"},{"id":"17979"},{"id":"17984"},{"id":"17989"},{"id":"17994"},{"id":"17999"},{"id":"18004"},{"id":"18009"},{"id":"18014"},{"id":"18019"},{"id":"18024"},{"id":"18029"},{"id":"18034"},{"id":"18039"},{"id":"18044"},{"id":"18049"}],"right":[{"id":"18057"}],"title":{"id":"18051"},"toolbar":{"id":"17922"},"toolbar_location":null,"width":360,"x_range":{"id":"18053"},"x_scale":{"id":"17900"},"y_range":{"id":"18054"},"y_scale":{"id":"17902"}},"id":"17895","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17933","type":"Line"},{"attributes":{"source":{"id":"17976"}},"id":"17980","type":"CDSView"},{"attributes":{"source":{"id":"18011"}},"id":"18015","type":"CDSView"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18093"},"selection_policy":{"id":"18092"}},"id":"17996","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18001"},"glyph":{"id":"18002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18003"},"view":{"id":"18005"}},"id":"18004","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17932","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18022","type":"Line"},{"attributes":{},"id":"18075","type":"Selection"},{"attributes":{},"id":"18107","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17952","type":"Line"},{"attributes":{"source":{"id":"18021"}},"id":"18025","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17987","type":"Circle"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18087"},"selection_policy":{"id":"18086"}},"id":"17981","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18008","type":"Line"}],"root_ids":["18120"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"b4b0e831-4c5c-485a-9537-f5baa9a75092","root_ids":["18120"],"roots":{"18120":"e675786f-5516-44f3-9465-04dc7850222e"}}];
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