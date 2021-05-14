'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "608893076e2ccdd5abb93e84b819a4ce",
"assets/assets/data/design_patterns.json": "03a8b522c2281388add3c00f4648dcf4",
"assets/assets/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/assets/fonts/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/assets/images/abstract_factory/abstract_factory.png": "d6de4613f3719b90b91227ccbcd6048e",
"assets/assets/images/abstract_factory/abstract_factory_implementation.png": "8f17eb2e8abd26068fa2e845ac84789e",
"assets/assets/images/adapter/adapter.png": "da8062f169c94f7d62d84f8a696d2b87",
"assets/assets/images/adapter/adapter_implementation.png": "3c31191072531e1a6d7cf87194fd75c2",
"assets/assets/images/bridge/bridge.png": "b90431148f8d2c43beacef7746a9e5d8",
"assets/assets/images/bridge/bridge_implementation.png": "7ef725ebddd83b32578db6c57a4dd81b",
"assets/assets/images/builder/builder.png": "37248e6c371187d204fe371dba166fb1",
"assets/assets/images/builder/builder_implementation.png": "6fddf9ecb02724372727e4e2e2250a75",
"assets/assets/images/chain_of_responsibility/chain_of_responsibility.png": "b1ef8006eebf849c991981da94a7f84b",
"assets/assets/images/chain_of_responsibility/chain_of_responsibility_implementation.png": "6158934d5255eba4d46ecca14237f728",
"assets/assets/images/command/command.png": "e88977cdfe61cbdc3d71a980c8250cb7",
"assets/assets/images/command/command_implementation.png": "6ae5df95784fa2be58ea52697ce96731",
"assets/assets/images/composite/composite.png": "70aaf303d78e24c5482208432d108bd0",
"assets/assets/images/composite/composite_implementation.png": "57c94f30a6b413ddaee791e3accd762a",
"assets/assets/images/decorator/decorator.png": "5eabe78a5b995acd193937e24829a67b",
"assets/assets/images/decorator/decorator_implementation.png": "1852c3fd8388713daa23e9628784d1c2",
"assets/assets/images/facade/facade.png": "c1e7c4da8661dae878baf15922cacb70",
"assets/assets/images/facade/facade_implementation.png": "d1977a0d6cacbcca9425d730b868a3ae",
"assets/assets/images/factory_method/factory_method.png": "2358b390b417e3abc0313fdcd4efebd6",
"assets/assets/images/factory_method/factory_method_implementation.png": "ead8cf81f779d7aea4494a1f6dc9577e",
"assets/assets/images/flyweight/flyweight.png": "3bfc4944e3871ece0e4ff7a1ba0fded9",
"assets/assets/images/flyweight/flyweight_implementation.png": "895d4f11a8a2a1c57a14ea9026862f4f",
"assets/assets/images/interpreter/interpreter.png": "11ed27098085d5d5a7a92b0626fd81fc",
"assets/assets/images/interpreter/interpreter_implementation.png": "a6da29ea1b57197979c65ac4bc8d2ca7",
"assets/assets/images/iterator/iterator.png": "124958f7e52409e424418912e8c95adf",
"assets/assets/images/iterator/iterator_implementation.png": "16fe8ca4db1ee7bb6fcee7c8439429df",
"assets/assets/images/mediator/mediator.png": "8926302a5d8db477eb48d2e6c7d11a3a",
"assets/assets/images/mediator/mediator_implementation.png": "1b14a868729bfa7787a57d57522df526",
"assets/assets/images/memento/memento.png": "8071f38527566f7c7773f3f898da6383",
"assets/assets/images/memento/memento_implementation.png": "804c949cc3423b5e75f24188a495fc2b",
"assets/assets/images/observer/observer.png": "6fc724c4b607548de4dfd9d9d409116d",
"assets/assets/images/observer/observer_implementation.png": "78fa2e0ee0fefd64a6672250fa354acf",
"assets/assets/images/prototype/prototype.png": "96134539989ed5bc5ed21d6ded2069f5",
"assets/assets/images/prototype/prototype_implementation.png": "ecb30ba44e161cbd5f0ac82897b82a41",
"assets/assets/images/proxy/proxy.png": "4634ac72c30acc351ff13dd7b324bf81",
"assets/assets/images/proxy/proxy_implementation.png": "ba6d84011ae74bedcdab5ba94a9b5813",
"assets/assets/images/singleton/singleton.png": "0aa7487ffc34b0e7221252b27da9b77d",
"assets/assets/images/singleton/singleton_implementation.png": "8d91b90803556356b2a300cabc05b9d7",
"assets/assets/images/state/state.png": "d4bfb886a639a8b5765e8dc9c768a4d7",
"assets/assets/images/state/state_implementation.png": "4aa4831afdfbf98fcff56a1b7b8a5c8f",
"assets/assets/images/strategy/strategy.png": "ed8740fd6c16bc0567ab2d50ef7e5c3d",
"assets/assets/images/strategy/strategy_implementation.png": "f7ae1bbfef3e190796e5d93588fed95f",
"assets/assets/images/template_method/template_method.png": "8114a61e61baddd44722fad97698ac74",
"assets/assets/images/template_method/template_method_implementation.png": "78bbd2e99fd4d691e79c7234636ed5b6",
"assets/assets/images/visitor/visitor.png": "dff8c2e44d09ea560c173d8bd0d43289",
"assets/assets/images/visitor/visitor_implementation.png": "f05909ed762bbbc365d55f594f74fdb6",
"assets/assets/markdown/abstract-factory.md": "71617400da9d248d6f902926e45a4418",
"assets/assets/markdown/adapter.md": "29d3faab4c5e0b6662d029ab3061db19",
"assets/assets/markdown/bridge.md": "afd5a912c98709ccccc71d71b9670057",
"assets/assets/markdown/builder.md": "d502da2ee63d7303260cb4b5ac72f173",
"assets/assets/markdown/chain-of-responsibility.md": "8f25e86ce5ec5a9e24b5c68655a316a7",
"assets/assets/markdown/command.md": "25372d14b3a234959bd46160987dd081",
"assets/assets/markdown/composite.md": "5e489971c9a7540a6c8d221effed219f",
"assets/assets/markdown/decorator.md": "0946836fe46af47f48b4b770dadde410",
"assets/assets/markdown/facade.md": "e1ba5828356253781b5fcea7a6dbf3e2",
"assets/assets/markdown/factory-method.md": "448360d379d64d145eb809f393d84a01",
"assets/assets/markdown/flyweight.md": "85e0bf3509b81a23e402fa305686293b",
"assets/assets/markdown/interpreter.md": "64e741fea76b9e9daa3df3bda68e81df",
"assets/assets/markdown/iterator.md": "5707cdf3e94997341ca9b20f678bfd90",
"assets/assets/markdown/mediator.md": "d9807170b823238929b95a2ca64ba886",
"assets/assets/markdown/memento.md": "5b13eef81e97f54904603756c868e441",
"assets/assets/markdown/observer.md": "1d1960b97ef7847a13d8438ed867d3ae",
"assets/assets/markdown/prototype.md": "da9b8b1b391fd103c524e75615f47070",
"assets/assets/markdown/proxy.md": "db1cc8474b036c0a35a83979195546aa",
"assets/assets/markdown/singleton.md": "5b71b71b0b716dfa417e61d05f8e8adf",
"assets/assets/markdown/state.md": "0ced403137c14dd1732f17b24df527eb",
"assets/assets/markdown/strategy.md": "de2f8fb7529657ac1c770f328f599d0c",
"assets/assets/markdown/template-method.md": "ed8ae62bade487b75f1b9ff42ed58159",
"assets/assets/markdown/visitor.md": "e802fa316f0d1ae99f75678a04b6099e",
"assets/FontManifest.json": "3b4dc2a45e786ea37059c0b1bd4be15d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "f93b1c5152ac2ca7c6fcfd88208091d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b3887cee5a70e69ce0de41ffaa55e6aa",
"/": "b3887cee5a70e69ce0de41ffaa55e6aa",
"main.dart.js": "69f532857e8c3ede66e63d86748fc6e2",
"manifest.json": "54f6d253198ca14c3e927eae911e357a",
"version.json": "cd8e4d2202f8f0ae55bb02c3c7d746ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
