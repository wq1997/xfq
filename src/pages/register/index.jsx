import React, { useState, useCallback } from 'react';
import {
  Input,
  Button,
  DatePicker,
  Picker,
  TextArea,
  ImageUploader,
} from 'antd-mobile';
import moment from 'moment';
import { CONSTANT } from '../../utils/constant';
import styles from './index.less';

const { SEX_COLUMNS, OCCUPATION_COLUMNS } = CONSTANT;

const now = new Date();

const Register = (props) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [sexVisible, setSexVisible] = useState(false);
  const [occupationVisible, setOccupationVisible] = useState(false);

  // 姓名
  const [name, setName] = useState('');
  // 年龄
  const [age, setAge] = useState('');
  // 性别
  const [sex, setSex] = useState('男');
  // 职业
  const [occupation, setOccupation] = useState('1');
  // 我是什么样的人
  const [whoIAm, setWhoIAm] = useState('');
  // 我想要找什么样的人
  const [whoIWant, setWhoIwant] = useState('');
  // 相册
  const [fileList, setFileList] = useState([]);

  const currentOccupationLabel = OCCUPATION_COLUMNS[0].find(
    (item) => item.value === occupation,
  )['label'];

  const upload = async function mockUpload(file) {
    return {
      url: URL.createObjectURL(file),
    };
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerTitle}>注册</div>
      <div className={styles.registerContent}>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>姓名</div>
          <div className={styles.registerInsert}>
            <Input
              placeholder="张三"
              value={name}
              onChange={(name) => setName(name)}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>年龄</div>
          <div className={styles.registerInsert}>
            <div
              className={styles.registerAge}
              onClick={(_) => setDatePickerVisible(true)}
            >
              年-月-日
            </div>
            <DatePicker
              visible={datePickerVisible}
              onClose={() => {
                setDatePickerVisible(false);
              }}
              max={now}
              onConfirm={(val) => {
                setAge(val);
              }}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>性别</div>
          <div className={styles.registerInsert}>
            <div
              className={styles.registerAge}
              onClick={(_) => setSexVisible(true)}
            >
              {sex}
            </div>
            <Picker
              columns={SEX_COLUMNS}
              visible={sexVisible}
              onClose={() => {
                setSexVisible(false);
              }}
              value={sex}
              onConfirm={(v) => {
                setSex(v[0]);
              }}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>职业</div>
          <div className={styles.registerInsert}>
            <div
              className={styles.registerAge}
              onClick={(_) => setOccupationVisible(true)}
            >
              {currentOccupationLabel}
            </div>
            <Picker
              columns={OCCUPATION_COLUMNS}
              visible={occupationVisible}
              onClose={() => {
                setOccupationVisible(false);
              }}
              value={occupation}
              onConfirm={(v) => {
                setOccupation(v[0]);
              }}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>我是什么样的人</div>
          <div className={styles.registerInsert}>
            <TextArea
              placeholder="我是什么样的人"
              autoSize={{ minRows: 5, maxRows: 5 }}
              value={whoIAm}
              onChange={(val) => {
                setWhoIAm(val);
              }}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>我想要找什么样的人</div>
          <div className={styles.registerInsert}>
            <TextArea
              placeholder="我想要找什么样的人"
              autoSize={{ minRows: 5, maxRows: 5 }}
              value={whoIWant}
              onChange={(val) => {
                setWhoIwant(val);
              }}
            />
          </div>
        </div>
        <div className={styles.registerContentItem}>
          <div className={styles.registerLabel}>上传个人相册</div>
          <div className={styles.registerInsert}>
            <ImageUploader
              value={fileList}
              onChange={setFileList}
              upload={upload}
            />
          </div>
        </div>
      </div>
      <div className={styles.submit}>
        <Button className={styles.submitBtn}>注册</Button>
      </div>
    </div>
  );
};

export default Register;
