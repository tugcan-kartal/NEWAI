import React from 'react';

const TalkWithAI = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '75%', height: '80%' }}>
        <iframe
          title="Chatbot"
          style={{ width: '100%', height: '100%', border: 'none' }}
          // src='https://chat.openai.com/'
          src="https://hix.ai/chat"
        ></iframe>
      </div>
    </div>
  );
}

export default TalkWithAI;
