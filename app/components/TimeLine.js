
import React, { Component } from 'react';
import TimePoint from './TimePoint';

class TimeLine extends Component {
    render() {
        //模拟数据
        const timeArr = [
            {
                key: 1,
                time: '2015-12-01',
                context: '这里显示一些提示信息'
            },
            {
                key: 2,
                time: '2015-12-05',
                context: '这里显示一些提示信息'
            },
            {
                key: 3,
                time: '2015-12-09',
                context: '这里显示一些提示信息'
            }
        ];

        //渲染子组件
        let timePoints = timeArr.map( point => {
            return <TimePoint key={point.key} liWidth={100/(timeArr.length) + '%'} pointContext={point} />
        });

        return (
            <div className='container'>
                <ul className='time-ul'>
                    {timePoints}
                    <i>></i>
                </ul>
            </div>
        )
    }
};

module.exports = TimeLine;
