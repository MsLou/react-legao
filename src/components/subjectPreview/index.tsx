import * as React from 'react'
import { connect } from 'react-redux'
import ImgHotArea from '../../subjectComponents/imgHotArea/preview'
import BaseInfo from '../../subjectComponents/baseInfo/preview'
import './index.css'

function PreviewItem (props: any) {
    const classActive: string = props.active ? 'active' : ''
    return (
        // tslint:disable-next-line:jsx-no-lambda
        <div className={`preview-item ${classActive}`} id={props.componentId} onClick={() => props.handlerSelect(props.componentId)}>
            {props.children}
            <span className="preview-border left" />
            <span className="preview-border top" />
            <span className="preview-border right" />
            <span className="preview-border bottom" />
        </div>
    )
}

class SubjectPreview extends React.Component<SubjectMain.IStore> {
    public handlerSelect = (componentId: string) => {
        this.props.dispatch({ type: 'COMPONENT_SELECT', data: this.props.componentData[componentId] })
    }
    public render () {
        const { components, componentData, editComponent } = this.props
        return (
            <div className="preview" >
                <div className="inner">
                    <PreviewItem componentId={'BaseInfo'} active={editComponent.componentId === 'BaseInfo' ? true : false} handlerSelect={this.handlerSelect}>
                        <BaseInfo />
                    </PreviewItem>
                    {components.map((item: any, index: number) => {
                        return <PreviewItem key={index} active={editComponent.componentId === item ? true : false} componentId={item} handlerSelect={this.handlerSelect}>
                            <ImgHotArea data={componentData[item]} />
                        </PreviewItem>
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state: any) {
    return state
}

export default connect(mapStateToProps)(SubjectPreview)