import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { RangePicker } = DatePicker;

ReactDOM.render(
  <div>
    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
  </div>,
  document.getElementById('container')
);
