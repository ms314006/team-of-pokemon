import React from 'react';
import styles from './index.scss';

interface MessageBoxProps {
  message: string;
}

const MessageBox: React.FC<MessageBoxProps> = (props: MessageBoxProps) => {
  const { message } = props;
  return (
    <div className={styles.main}>
      <div className={styles.messageBorder}>
        <div className={styles.messageBox}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
