import { Button } from 'element-react';
import * as React from 'react'
import './index.css'

export default class SubjectHead extends React.Component {
    public render () {
        return (
            <div className="head">
                <div className="head-btn">
                    <Button>预览</Button>
                    <Button>保存</Button>
                    <Button type="primary">发布</Button>
                </div>
            </div>
        )
    }
}