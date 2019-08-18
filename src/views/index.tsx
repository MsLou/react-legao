import * as React from 'react'
import SubjectHead from '../components/subjectHead'
import SubjectMenu from '../components/subjectMenu'
import SubjectPreview from '../components/subjectPreview'
import SubjectEdit from '../components/subjectEdit'
import BaseInfoGetData from '../subjectComponents/baseInfo/data'
import { connect } from 'react-redux'

class App extends React.Component<SubjectMain.IStore> {
    public static state = {}
    public render () {
        return (
            <div className="app">
                <SubjectHead />
                <SubjectMenu />
                <SubjectPreview />
                <SubjectEdit />
            </div>
        )
    }
    public componentDidMount () {
        this.props.dispatch({ type: 'COMPONENT_INIT_BASEINFO', data: BaseInfoGetData() })
    }
}

function mapStateToProps (state: any) {
    return state
}

export default connect(mapStateToProps)(App)