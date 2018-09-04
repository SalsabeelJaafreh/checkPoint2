## Node
* [ ] Finish implementing the provided HTTP request handler
  * [ ] POSTing to a route should toggle the corresponding key (true/false) on globalObject.
  * [ ] GETting from a route should return the value stored at that property on globalObject.
    * Example: A POST to `/prop1` should set `globalObject.prop1 = true`
      A subsequent GET to `/prop1` should return `true`
      A subsequent GET to `/prop2` should return an empty response, as it has not yet been set.
