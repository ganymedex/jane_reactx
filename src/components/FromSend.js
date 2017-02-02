import React from 'react';
import styles from './FromSend.css'
import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Slider,
  Row,
  Col,
  Checkbox,
  Button
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];
//class FromComponent extends React.Component {
const FromComponent = Form.create()(React.createClass({
  getInitialState() {
    return {passwordDirty: false};
  },
  handleSubmit(e) {
    e.preventDefault();
    this
      .props
      .form
      .validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({
      passwordDirty: this.state.passwordDirty || !!value
    });
  },
  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  },
  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6
      }
    };
    const prefixSelector = getFieldDecorator('prefix', {initialValue: '86'})(
      <Select style={{
          width:80
        }}>
        <Option value="86">+86</Option>
        <Option value="00">+00</Option>
      </Select>
    );
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={(
          <span>
            标题&nbsp;
            <Tooltip title="让更多人知道怎么可以帮助您?">
              <Icon type="question-circle-o"/>
            </Tooltip>
          </span>
        )}
        hasFeedback>
          {getFieldDecorator('title', {
            rules: [
            {
                required: true,
                message: '请输入标题内容'
              }
            ]
          })(<Input placeholder="咋滴了？兄弟" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={(
          <span>
            内容&nbsp;
            <Tooltip title="说出你梗详细的需求">
              <Icon type="question-circle-o"/>
            </Tooltip>
          </span>
        )}
        hasFeedback>
          {getFieldDecorator('title', {
            rules: [
            {
                required: true,
                message: '请输入详细内容'
              }
            ]
          })(<Input type='textarea' placeholder="让别人知道你需要什么样的帮助细节" />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
          <span>
            昵称&nbsp;
            <Tooltip title="让帮助你的人知道你是谁?">
              <Icon type="question-circle-o"/>
            </Tooltip>
          </span>
        )}
          hasFeedback>
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: '请输入您的昵称!'
              }
            ]
          })(<Input placeholder="请留下花名" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="手机号">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请留下您的联系方式!'
              }
            ]
          })(<Input addonBefore={prefixSelector}/>)}
        </FormItem>
          <FormItem
          {...formItemLayout}
          label={(
          <span>
            红包&nbsp;
            <Tooltip title="不能让帮助你的人白忙活">
              <Icon type="question-circle-o"/>
            </Tooltip>
          </span>
        )}
          hasFeedback>
          {getFieldDecorator('redpack', {
            rules: [
              {
                required: true,
                message: '请输入红包金额!'
              }
            ]
          })(<Input placeholder="不能让帮助你的人白忙活！" />)}
        </FormItem>
       <FormItem
          {...formItemLayout}
          label="选择时间周期"
        >
          {getFieldDecorator('slider')(
            <Slider min={1} max={30} marks={{ 1: '1天', 7: '7天', 14: '14天', 30: '30天' }} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{
          marginBottom: 8
        }}>
          {getFieldDecorator('agreement', {valuePropName: 'checked'})(
            <Checkbox> 同意
              <a>协议</a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">发布</Button>
        </FormItem>
      </Form>
    );
  }
}));
FromComponent.propTypes = {};

// 并不会监听数据
export default FromComponent;
