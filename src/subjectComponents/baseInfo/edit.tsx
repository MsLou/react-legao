import * as React from 'react'
import { connect } from 'react-redux'

interface IProps extends SubjectMain.IStore {
    data: any
}
class BaseInfoEdit extends React.Component<IProps> {
    public static state = {}
    public render () {
        return (
            <div className="baseinfo-edit">
                baseinfo
            </div>
        )
    }
}

export default connect(state => state)(BaseInfoEdit)