!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-body")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("lodash.merge")},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(2),u=r(3),i=r(4),a=r(5);var c=r(0);const s=new c;s.get("/:city",async(e,t)=>{console.log(e);const r=e.params.city,n=function(e,t={}){const r=new u.URL(e),n={host:r.hostname,path:r.pathname+r.search,method:"GET",headers:{"Content-Type":"application/json"}};return console.log("href is: ",r.href),i(n,t)}("http://"+"api.openweathermap.org/data/2.5/weather".concat(`?q=${r}&appid=d69002aec868feac44f30fcec92c2345&units=metric`),{timeout:2e3});e.body=await function(e,t=""){return new Promise((r,n)=>{let o="";console.log(e);const u=a.request(e,e=>{e.on("data",e=>{o+=e}),e.on("end",()=>{console.log(o),r(o)})});u.on("error",e=>{n(e.message)}),u.write(t),u.end()})}(n),await t});const f=s,l=new n,p=new c;l.use(o({urlencoded:!0})),l.use(f.routes()),l.use(p.routes()),l.use(p.allowedMethods()),l.listen(3004)}]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoLm1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy93ZWF0aGVyLnJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9odHRwLWpzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwicmVxdWlyZSIsInJvdXRlciIsImFzeW5jIiwiY3R4IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJjaXR5IiwicGFyYW1zIiwib3B0aW9ucyIsImVuZHBvaW50Iiwib3B0cyIsInVybCIsImhvc3QiLCJob3N0bmFtZSIsInBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJocmVmIiwiY29uY2F0IiwidGltZW91dCIsImJvZHkiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqc29uIiwicmVxIiwicmVzIiwib24iLCJjaHVuayIsImUiLCJtZXNzYWdlIiwid3JpdGUiLCJlbmQiLCJ3ZWF0aGVyIiwiYXBwIiwidXNlIiwidXJsZW5jb2RlZCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiNkRBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBMERmLE9BckRBRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksR0FJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsZ0JDbEZyRGhDLEVBQU9ELFFBQVVrQyxRQUFRLGUsY0NBekJqQyxFQUFPRCxRQUFVa0MsUUFBUSxRLGNDQXpCakMsRUFBT0QsUUFBVWtDLFFBQVEsYSxjQ0F6QmpDLEVBQU9ELFFBQVVrQyxRQUFRLFEsY0NBekJqQyxFQUFPRCxRQUFVa0MsUUFBUSxpQixjQ0F6QmpDLEVBQU9ELFFBQVVrQyxRQUFRLFUsc0ZDSXpCLE1BaUJNQyxFQUFTLElBQUksRUFDbkJBLEVBQU9wQixJQUFJLFNBbEJjcUIsTUFBT0MsRUFBY0MsS0FHMUNDLFFBQVFDLElBQUlILEdBQ1osTUFBTUksRUFBT0osRUFBSUssT0FBT0QsS0FJbEJFLEVDTkgsU0FBcUJDLEVBQWtCQyxFQUE0QixJQUN0RSxNQUFNQyxFQUFNLElBQUksTUFBSUYsR0FDZEQsRUFBVSxDQUNaSSxLQUFNRCxFQUFJRSxTQUNWQyxLQUFNSCxFQUFJSSxTQUFXSixFQUFJSyxPQUN6QkMsT0FBUSxNQUNSQyxRQUFTLENBQUMsZUFBZ0IscUJBRzlCLE9BREFkLFFBQVFDLElBQUksWUFBYU0sRUFBSVEsTUFDdEIsRUFBT1gsRUFBU0UsR0RIUCxDQUZDLFVBTEQsMENBS3FCVSxPQUR2QixNQUFNZCx5REFHdUIsQ0FDdkNlLFFBQVMsTUFHYm5CLEVBQUlvQixXQ0VELFNBQWlCZCxFQUE4QmUsRUFBZSxJQUNqRSxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsRUFBU0MsS0FDekIsSUFBSUMsRUFBTyxHQUNYdkIsUUFBUUMsSUFBSUcsR0FDWixNQUFNb0IsRUFBTSxVQUFjcEIsRUFBVXFCLElBQ2hDQSxFQUFJQyxHQUFHLE9BQVNDLElBQ1pKLEdBQVFJLElBR1pGLEVBQUlDLEdBQUcsTUFBTyxLQUNWMUIsUUFBUUMsSUFBSXNCLEdBQ1pGLEVBQVFFLE9BR2hCQyxFQUFJRSxHQUFHLFFBQVVFLElBQ2JOLEVBQU9NLEVBQUVDLFdBRWJMLEVBQUlNLE1BQU1YLEdBQ1ZLLEVBQUlPLFFEcEJTLENBQWEzQixTQUV4QkwsSUFNSCxNQUFNaUMsRUFBVXBDLEVFcEJqQnFDLEVBQU0sSUFBSSxFQUNWLEVBQVMsSUFBSSxFQUVuQkEsRUFBSUMsSUFBSSxFQUFXLENBQ2ZDLFlBQVksS0FHaEJGLEVBQUlDLElBQUlGLEVBQVFJLFVBRWhCSCxFQUFJQyxJQUFJLEVBQU9FLFVBQ2ZILEVBQUlDLElBQUksRUFBT0csa0JBRWZKLEVBQUlLLE9BQU8iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJvZHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5tZXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJpbXBvcnQge0NvbnRleHR9IGZyb20gXCJrb2FcIjtcbmltcG9ydCAqIGFzIGpzb24gZnJvbSAnLi4vaGVscGVycy9odHRwLWpzb24nXG5pbXBvcnQgKiBhcyBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5cbmNvbnN0IGZldGNoRGVncmVlc0NpdHkgPSBhc3luYyAoY3R4OiBDb250ZXh0LCBuZXh0OiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9VUkw7XG4gICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZO1xuICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgY29uc3QgY2l0eSA9IGN0eC5wYXJhbXMuY2l0eTtcbiAgICBjb25zdCBwYXJhbSA9IGA/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1tZXRyaWNgO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9gICsgYmFzZVVSTC5jb25jYXQocGFyYW0pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGpzb24ub3B0aW9uc19nZXQoZW5kcG9pbnQsIHtcbiAgICAgICAgdGltZW91dDogMjAwMCxcbiAgICB9KTtcblxuICAgIGN0eC5ib2R5ID0gYXdhaXQganNvbi5yZXF1ZXN0KG9wdGlvbnMpO1xuXG4gICAgYXdhaXQgbmV4dDtcbn07XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbnJvdXRlci5nZXQoJy86Y2l0eScsIGZldGNoRGVncmVlc0NpdHkpO1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlciA9IHJvdXRlcjtcbiIsImltcG9ydCB7VVJMfSBmcm9tICd1cmwnXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgKiBhcyBfbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gXCJodHRwc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25zX2dldChlbmRwb2ludDogc3RyaW5nLCBvcHRzOiBodHRwLlJlcXVlc3RPcHRpb25zID0ge30pOiBodHRwLlJlcXVlc3RPcHRpb25zIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuZHBvaW50KTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3N0OiB1cmwuaG9zdG5hbWUsXG4gICAgICAgIHBhdGg6IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2gsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiaHJlZiBpczogXCIsIHVybC5ocmVmKTtcbiAgICByZXR1cm4gX21lcmdlKG9wdGlvbnMsIG9wdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zOiBodHRwLlJlcXVlc3RPcHRpb25zLCBkYXRhOiBzdHJpbmcgPSAnJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBqc29uID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCByZXEgPSBodHRwcy5yZXF1ZXN0KG9wdGlvbnMsIChyZXM6IGh0dHAuSW5jb21pbmdNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICBqc29uICs9IGNodW5rO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUubWVzc2FnZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS53cml0ZShkYXRhKTtcbiAgICAgICAgcmVxLmVuZCgpO1xuICAgIH0pO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBLb2EgZnJvbSAna29hJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdrb2EtYm9keSc7XG5pbXBvcnQge3dlYXRoZXJ9IGZyb20gJy4vcm91dGVycy93ZWF0aGVyLnJvdXRlcidcbmltcG9ydCAqIGFzIFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIoe1xuICAgIHVybGVuY29kZWQ6IHRydWUsXG59KSk7XG5cbmFwcC51c2Uod2VhdGhlci5yb3V0ZXMoKSk7XG5cbmFwcC51c2Uocm91dGVyLnJvdXRlcygpKTtcbmFwcC51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuXG5hcHAubGlzdGVuKDMwMDQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==