import * as React from 'react'
import { connect } from 'react-redux'
import BaseInfo from '../../subjectComponents/baseInfo/edit'
import ImgHotArea from '../../subjectComponents/imgHotArea/edit'
import {  createKey, deepClone } from '../../utils'
import './index.css'

const EditComponentAll = { BaseInfo, ImgHotArea }
function EditBtns (props: any) {
    return (
        <div className="edit-btns">
            {/* tslint:disable-next-line:jsx-no-lambda */}
            {props.components[props.components.length - 1] === props.editComponent.componentId ? null : <button onClick={() => props.move('down')}>下移</button>}
            {/* tslint:disable-next-line:jsx-no-lambda */}
            {props.components[0] === props.editComponent.componentId ? null : <button onClick={() => props.move('up')}>上移</button>}
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <button onClick={() => props.copy(props.editComponent.componentId)}>复制</button>
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <button onClick={() => props.remove(props.editComponent.componentId)}>删除</button>
        </div>
    )
}
function EditBody (props: any) {
    let bodyComponent
    
    switch(props.data.type) {
        case 'BaseInfo':
            bodyComponent = <BaseInfo data={props.data} />
            break
        case 'ImgHotArea':
            bodyComponent = <ImgHotArea data={props.data} />
    }
    return (
        <div className="edit-body">
            {bodyComponent}
        </div>
    )
}
/**
 * 移动编辑区
 */
function moveEditArea (id: string = '') {
    const clickTarget: HTMLElement | null = document.getElementById(id)
    if (!clickTarget) {
      return
    }
    const moveTarget: HTMLElement | null = document.getElementById('editArea')
    if (moveTarget) {
      const top: number = clickTarget.offsetTop - 18
      moveTarget.style.transform = `translate(0, ${top}px)`
      moveTarget.style.webkitTransform = `translate(0, ${top}px)`
    }
}
function EditComponent (props: any) {
    if (props.components.indexOf(props.editComponent.componentId) > -1) {
        return (
            <div className="edit" id="editArea">
                {props.editComponent.type !== 'BaseInfo' ? <EditBtns copy={props.copy} remove={props.remove} move={props.move} editComponent={props.editComponent} components={props.components} /> : null}
                {EditComponentAll[props.editComponent.type] ? <EditBody data={props.editComponent} /> : null}
            </div>
        )
    }
    return null
}
class SubjectEdit extends React.Component<SubjectMain.IStore> {
    public state = {}
    // 移动组件
    public move = (position: string) => {
        const { components } = this.props
        const newList = [ ...components ]
        const curKey = this.props.editComponent.componentId
        const curIdx = components.indexOf(curKey)
        switch (position) {
            case 'up': // 向上
                const prevKey = newList[curIdx - 1]
                newList.splice(curIdx - 1, 2, curKey, prevKey)
                break;
            case 'down':
                const nextKey = newList[curIdx + 1]
                newList.splice(curIdx, 2, nextKey, curKey)
                break;
        }
        this.props.dispatch({ type: 'COMPONENT_MOVR', data: newList })
        setTimeout(() => {
            moveEditArea(curKey)
        }, 50)
    }
    // 删除组件
    public remove = (componentId: string) => {
        this.props.dispatch({ type: 'COMPONENT_REMOVE', componentId })
    }
    // 复制组件
    public copy = (componentId: string) => {
        const { editComponent, components } = this.props
        const index = components.indexOf(editComponent.componentId)
        // console.log(deepClone(this.props.editComponent), index)
        this.props.dispatch({ type: 'COMPONENT_ADD', componentId: createKey(), data: deepClone(this.props.editComponent), index: index + 1, })
    }
    public render () {
        const { editComponent, components } = this.props
        return (
            <EditComponent editComponent={editComponent} components={components} copy={this.copy} move={this.move} remove={this.remove} />
        )
    }
}

export default connect(state => state)(SubjectEdit)