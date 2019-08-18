import * as React from 'react'
import { connect } from 'react-redux'
import { Form, Input } from 'element-react';

interface IProps extends SubjectMain.IStore {
    data: any
}
interface IState {
    form: {
        imgUrl: string
    }
}
class ImgHotAreaEdit extends React.Component<IProps, IState> {
    public state = {
        form: {
            imgUrl: '1212'
        }
    }
    public setImgUrl = (value: any) => {
        // this.setState(Object.assign(this.state, { form: { imgUrl: value }}))
        const { data } = this.props
        data.imgUrl = value
        this.props.dispatch({ type: 'COMPONENT_SET', data, componentId: data.componentId })
    }
    public render () {
        return (
            <div className="baseinfo-edit">
                <Form model={this.state.form} labelWidth="80">
                    <Form.Item label="图片地址">
                        <Input value={this.props.data.imgUrl} onChange={this.setImgUrl} placeholder="请输入在线图片地址" />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default connect(state => state)(ImgHotAreaEdit)