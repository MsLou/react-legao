/*
 * @Author: Luoxd
 * @Description: 
 * @Date: 2019-08-08 14:19:17
 * @LastEditTime: 2019-08-18 20:33:26
 * @LastEditors: Luoxd
 */
import { combineReducers } from 'redux'
import { stat } from 'fs';

function componentData(state = {}, action) {
  const { componentId, data } = action
  switch(action.type) {
    case 'COMPONENT_ADD':
      data.componentId = action.componentId
      return {
        ...state,
        [componentId]: data
      }
    case 'COMPONENT_INIT_BASEINFO':
        data.componentId = 'BaseInfo'
        return {
          ...state,
          BaseInfo: data
        }
    case 'COMPONENT_SET':
        return {
          ...state,
          [componentId]: data
        }
  }
  return state
}

function components(state = [], action) {
  const { componentId, index, data } = action
  switch(action.type) {
    case 'COMPONENT_ADD':
      if (typeof index === 'number') {
        state.splice(index, 0, componentId)
        return [ ...state ]
      } else {
        return [
          ...state,
          componentId
        ]
      }
    case 'COMPONENT_MOVR':
      return action.data
    case 'COMPONENT_REMOVE':
      const idx = state.indexOf(componentId)
      state.splice(idx, 1)
      return [ ...state ]
  }
  return state
}

function editComponent (state = {}, action) {
  switch(action.type) {
    case 'COMPONENT_SELECT':
      return action.data
  }
  return state
}

export default combineReducers({
  componentData,
  components,
  editComponent
})
