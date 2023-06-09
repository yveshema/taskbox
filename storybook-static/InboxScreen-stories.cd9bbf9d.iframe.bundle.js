(self.webpackChunkappui=self.webpackChunkappui||[]).push([[708],{"./src/stories/InboxScreen.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Error:function(){return Error},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return InboxScreen_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./src/lib/store.js"),TaskList=__webpack_require__("./src/components/TaskList.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InboxScreen=function InboxScreen(){var dispatch=(0,es.I0)(),error=(0,es.v9)((function(state){return state.taskbox})).error;return(0,react.useEffect)((function(){dispatch((0,store.Jv)())}),[]),error?(0,jsx_runtime.jsx)("div",{className:"page lists-show",children:(0,jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[(0,jsx_runtime.jsx)("span",{className:"icon-face-sad"}),(0,jsx_runtime.jsx)("p",{className:"title-message",children:"Oh no!"}),(0,jsx_runtime.jsx)("p",{className:"subtitle-message",children:"Something went wrong"})]})}):(0,jsx_runtime.jsxs)("div",{className:"page lists-show",children:[(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsx)("h1",{className:"title-page",children:"Taskbox"})}),(0,jsx_runtime.jsx)(TaskList.Z,{})]})};InboxScreen.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Error$parameters,_Error$parameters2,_Error$parameters2$do,_play,components_InboxScreen=InboxScreen,lib=__webpack_require__("./node_modules/msw/lib/index.js"),TaskList_stories=__webpack_require__("./src/stories/TaskList.stories.jsx"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),InboxScreen_stories={component:components_InboxScreen,title:"App/InboxScreen",decorators:[function(story){return(0,jsx_runtime.jsx)(es.zt,{store:store.ZP,children:story()})}],tags:["autodocs"]},Default={parameters:{msw:{handlers:[lib.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.json(TaskList_stories.MockedState.tasks))}))]}},play:(_play=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(_ref){var canvasElement,canvas;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context2.t0=esm.mz,_context2.next=5,canvas.findByTestId("loading");case 5:return _context2.t1=_context2.sent,_context2.next=8,(0,_context2.t0)(_context2.t1);case 8:return _context2.next=10,(0,esm.X_)((0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,esm.BX.click(canvas.getByLabelText("pintask-1"));case 2:return _context.next=4,esm.BX.click(canvas.getByLabelText("pintask-3"));case 4:case"end":return _context.stop()}}),_callee)}))));case 10:case"end":return _context2.stop()}}),_callee2)}))),function play(_x){return _play.apply(this,arguments)})},Error={parameters:{msw:{handlers:[lib.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.status(403))}))]}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  parameters: {\n    msw: {\n      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {\n        return res(ctx.json(MockedState.tasks));\n      })]\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for the component to transition from the loading state\n    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));\n\n    // Wait for the component to be updated based on the store\n    await waitFor(async () => {\n      // Simulate pinning the first task\n      await fireEvent.click(canvas.getByLabelText('pintask-1'));\n\n      // Simulate pinning the third task\n      await fireEvent.click(canvas.getByLabelText('pintask-3'));\n    });\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Error.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Error.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  parameters: {\n    msw: {\n      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {\n        return res(ctx.status(403));\n      })]\n    }\n  }\n}"},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2$do=_Error$parameters2.docs)||void 0===_Error$parameters2$do?void 0:_Error$parameters2$do.source)})});var __namedExportsOrder=["Default","Error"]},"./src/stories/Task.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:function(){return Archived},Default:function(){return Default},Pinned:function(){return Pinned},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Pinned$parameters,_Pinned$parameters2,_Pinned$parameters2$d,_Archived$parameters,_Archived$parameters2,_Archived$parameters3,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_Task__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Task.jsx");__webpack_exports__.default={component:_components_Task__WEBPACK_IMPORTED_MODULE_0__.Z,title:"App/Task",tags:["autodocs"]};var Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.args.task),{},{state:"TASK_PINNED"})}},Archived={args:{task:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.args.task),{},{state:"TASK_ARCHIVED"})}};Default.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    task: {\n      id: '1',\n      title: 'Test Task',\n      state: 'TASK_INBOX'\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Pinned.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Pinned.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Pinned$parameters=Pinned.parameters)||void 0===_Pinned$parameters?void 0:_Pinned$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: 'TASK_PINNED'\n    }\n  }\n}"},null===(_Pinned$parameters2=Pinned.parameters)||void 0===_Pinned$parameters2||null===(_Pinned$parameters2$d=_Pinned$parameters2.docs)||void 0===_Pinned$parameters2$d?void 0:_Pinned$parameters2$d.source)})}),Archived.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Archived.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Archived$parameters=Archived.parameters)||void 0===_Archived$parameters?void 0:_Archived$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: 'TASK_ARCHIVED'\n    }\n  }\n}"},null===(_Archived$parameters2=Archived.parameters)||void 0===_Archived$parameters2||null===(_Archived$parameters3=_Archived$parameters2.docs)||void 0===_Archived$parameters3?void 0:_Archived$parameters3.source)})});var __namedExportsOrder=["Default","Pinned","Archived"]},"./src/stories/TaskList.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Empty:function(){return Empty},Loading:function(){return Loading},MockedState:function(){return MockedState},WithPinnedTasks:function(){return WithPinnedTasks},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithPinnedTasks$para,_WithPinnedTasks$para2,_WithPinnedTasks$para3,_Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_Empty$parameters,_Empty$parameters2,_Empty$parameters2$do,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_TaskList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TaskList.jsx"),_Task_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Task.stories.jsx"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),MockedState={tasks:[(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"1",title:"Task 1"}),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"2",title:"Task 2"}),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"3",title:"Task 3"}),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"4",title:"Task 4"}),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"5",title:"Task 5"}),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_Task_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args.task),{},{id:"6",title:"Task 6"})],status:"idle",error:null},Mockstore=function Mockstore(_ref){var taskboxState=_ref.taskboxState,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.zt,{store:(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.xC)({reducer:{taskbox:(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.oM)({name:"taskbox",initialState:taskboxState,reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}}}).reducer}}),children:children})};__webpack_exports__.default={component:_components_TaskList__WEBPACK_IMPORTED_MODULE_0__.Z,title:"App/TaskList",decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{padding:"3rem"},children:story()})}],tags:["autodocs"],excludeStories:/.*MockedState$/};var Default={decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Mockstore,{taskboxState:MockedState,children:story()})}]},WithPinnedTasks={decorators:[function(story){var pinnedtasks=[].concat((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(MockedState.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Mockstore,{taskboxState:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},MockedState),{},{tasks:pinnedtasks}),children:story()})}]},Loading={decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Mockstore,{taskboxState:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},MockedState),{},{status:"loading"}),children:story()})}]},Empty={decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Mockstore,{taskboxState:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},MockedState),{},{tasks:[]}),children:story()})}]};Default.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Default.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithPinnedTasks.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},WithPinnedTasks.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_WithPinnedTasks$para=WithPinnedTasks.parameters)||void 0===_WithPinnedTasks$para?void 0:_WithPinnedTasks$para.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  decorators: [story => {\n    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {\n      id: '6',\n      title: 'Task 6 (pinned)',\n      state: 'TASK_PINNED'\n    }];\n    return <Mockstore taskboxState={{\n      ...MockedState,\n      tasks: pinnedtasks\n    }}>\n                    {story()}\n                </Mockstore>;\n  }]\n}"},null===(_WithPinnedTasks$para2=WithPinnedTasks.parameters)||void 0===_WithPinnedTasks$para2||null===(_WithPinnedTasks$para3=_WithPinnedTasks$para2.docs)||void 0===_WithPinnedTasks$para3?void 0:_WithPinnedTasks$para3.source)})}),Loading.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Loading.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  decorators: [story => <Mockstore taskboxState={{\n    ...MockedState,\n    status: 'loading'\n  }}>\n                {story()}\n            </Mockstore>]\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),Empty.parameters=(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Empty.parameters),{},{docs:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Empty$parameters=Empty.parameters)||void 0===_Empty$parameters?void 0:_Empty$parameters.docs),{},{source:(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  decorators: [story => <Mockstore taskboxState={{\n    ...MockedState,\n    tasks: []\n  }}>\n                {story()}\n            </Mockstore>]\n}"},null===(_Empty$parameters2=Empty.parameters)||void 0===_Empty$parameters2||null===(_Empty$parameters2$do=_Empty$parameters2.docs)||void 0===_Empty$parameters2$do?void 0:_Empty$parameters2$do.source)})});var __namedExportsOrder=["MockedState","Default","WithPinnedTasks","Loading","Empty"]},"./src/components/Task.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Task=function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"list-item ".concat(state),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:"checked","aria-label":"archiveTask-".concat(id),className:"checkbox",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:"archiveTask-".concat(id),checked:"TASK_ARCHIVED"===state}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{htmlFor:"title","aria-label":title,className:"title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",placeholder:"Input title"})}),"TASK_ARCHIVE"!==state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"pin-button",onClick:function onClick(){return onPinTask(id)},id:"pintask-".concat(id),"aria-label":"pintask-".concat(id),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"icon-star"})},"pintask-".concat(id))]})};Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=Task},"./src/components/TaskList.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_Task__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.jsx")),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_lib_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/store.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),TaskList=function TaskList(){var tasks=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((function(state){return[].concat((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"!==t.state})))).filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))})),status=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((function(state){return state.taskbox})).status,dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.I0)(),LoadingRow=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"loading-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"glow-checkout"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:"glow-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"Loading"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"cool"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"state"})]})]});return"loading"===status?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"list-items","data-testid":"loading",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]},"loading"):0===tasks.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"list-items","data-testid":"empty",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"wrapper-message",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"icon-check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"title-message",children:"You have no tasks"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"list-items","data-testid":"success",children:tasks.map((function(task){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_1__.Z,{task:task,onPinTask:function onPinTask(task){return function pinTask(value){dispatch((0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.V7)({id:value,newTaskState:"TASK_PINNED"}))}(task)},onArchiveTask:function onArchiveTask(task){return function archiveTask(value){dispatch((0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.V7)({id:value,newTaskState:"TASK_ARCHIVED"}))}(task)}},task.id)}))},"success")};TaskList.defaultProps={loading:!1},TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},tasks:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0},onPinTask:{description:"",type:{name:"func"},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1}}},__webpack_exports__.Z=TaskList},"./src/lib/store.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Jv:function(){return fetchTasks},V7:function(){return updateTaskState}});var _storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),fetchTasks=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.hg)("todos/fetchTodos",(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().mark((function _callee(){var response,data,result;return(0,_storage_common_devel_playground_appui_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("https://jsonplaceholder.typicode.com/todos?userId=1");case 2:return response=_context.sent,_context.next=5,response.json();case 5:return data=_context.sent,result=data.map((function(task){return{id:"".concat(task.id),title:task.title,state:task.completed?"TASK_ARCHIVED":"TASK_INBOX"}})),_context.abrupt("return",result);case 8:case"end":return _context.stop()}}),_callee)})))),TasksSlice=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.oM)({name:"taskbox",initialState:{tasks:[],status:"idle",error:null},reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}},extraReducers:function extraReducers(builder){builder.addCase(fetchTasks.pending,(function(state){state.status="loading",state.error=null,state.tasks=[]})).addCase(fetchTasks.fulfilled,(function(state,action){state.status="succeeded",state.error=null,state.tasks=action.payload})).addCase(fetchTasks.rejected,(function(state){state.status="failed",state.error="Something went wrong",state.tasks=[]}))}}),updateTaskState=TasksSlice.actions.updateTaskState,store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.xC)({reducer:{taskbox:TasksSlice.reducer}});__webpack_exports__.ZP=store},"?4f7e":function(){}}]);