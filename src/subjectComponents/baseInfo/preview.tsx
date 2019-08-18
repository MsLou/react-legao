import * as React from 'react'
import { connect } from 'react-redux'
import imgTopInfoBloack from '../../assets/images/top-info-black.png'

interface IProps extends SubjectMain.IStore {
    data: any
}
class BaseInfoPreview extends React.Component<IProps> {
    public static state = {}
    public render () {
        return (
            <div className="preview-head">
                <img className="signal" src={imgTopInfoBloack} alt="" />
                <div className="preview-title flex-center">
                    <i className="el-icon-arrow-left" />
                    <p className="title">页面标题</p>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(BaseInfoPreview)