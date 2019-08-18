import * as React from 'react'
import { connect } from 'react-redux'
import './preview.css'

interface IProps extends SubjectMain.IStore {
    data: any
}
class ImgHotAreaPreview extends React.Component<IProps> {
    public static state = {}
    public render () {
        let content: any = null
        const { data } = this.props
        if (data.imgUrl) {
            // tslint:disable-next-line:jsx-no-lambda
            content = <img src={data.imgUrl} alt=""/>
        } else {
            content = <p>请上传图片</p>
        }
        return (
            <div className="img-preview">
                {content}
            </div>
        )
    }
}

export default connect(state => state)(ImgHotAreaPreview)