// import Button from 'antd/es/button';
import * as React from 'react'
import { connect } from 'react-redux'
import imgHotAreaGetData from '../../subjectComponents/imgHotArea/data'
import { createKey } from '../../utils'
import './index.css'

function CatalogItem (props: any) {
    const classActive: string = `${props.active ? 'active' : ''}`
    return (
        <div className={`catalog-item flex-center ${classActive}`}>
            <i className={`iconfont ${classActive}`} />
            <span>常规</span>
        </div>
    )
}
function ModuleItem (props: any) {
    const icon: string = props.icon
    return (
        <div className="module-item flex-center" onClick={props.handlerModuleItem}>
            <i className={`iconfont ${icon}`} />
            <p>图片组件</p>
        </div>
    )
}

class SubjectMenu extends React.Component<SubjectMain.IStore> {
    public handlerModuleItem = () => {
        this.add()
    }
    public add = () => {
        this.props.dispatch({ type: 'COMPONENT_ADD', data: imgHotAreaGetData(), componentId: createKey() })
    }
    public render () {
        return (
            <div className="menu active">
                <div className="catalog">
                    <CatalogItem active={true} />
                </div>
                <div className="module">
                    <div className="module-inner">
                        <ModuleItem icon="" handlerModuleItem={this.handlerModuleItem} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state: any) {
    return state
}

export default connect(mapStateToProps)(SubjectMenu)