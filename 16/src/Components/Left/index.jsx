import React from 'react';
import './_index.scss'

function Left() {
  return (
    <div className="left">
      {/* Первый контакт */}
      <div>
        
        <div className="left-D">
          <img src="https://sobakovod.club/uploads/posts/2021-12/1640608530_1-sobakovod-club-p-sobaki-rotveilera-v-kapyushone-1.jpg" alt="David Peters" />
        </div>
        <div className="right-D">
          <div><b>David Peters</b></div>
          <div><span>Senior Developer</span></div>
        </div>
      </div>
      
      {/* Поисковая строка */}
      <input type="search" placeholder="Search Here..." />
      <hr />
      
      {/* Второй контакт */}
      <div>
        <div className="left-D">
          <img src="https://sobakovod.club/uploads/posts/2021-12/1640608530_1-sobakovod-club-p-sobaki-rotveilera-v-kapyushone-1.jpg" alt="Lisa Roy" />
        </div>
        <div className="right-D">
          <div><b>Lisa Roy</b></div>
          <div><span>Hi, are you Available Tomorrow?</span></div>
        </div>
      </div>

      {/* Третий контакт */}
      <div>
        <div className="left-D">
          <img src="https://sobakovod.club/uploads/posts/2021-12/1640608530_1-sobakovod-club-p-sobaki-rotveilera-v-kapyushone-1.jpg" alt="Jamie Taylor" />
        </div>
        <div className="right-D">
          <div><b>Jamie Taylor</b></div>
          <div><span>Nice One.<br />Will Do it tomorrow</span></div>
        </div>
      </div>

      {/* Четвертый контакт */}
      <div>
        <div className="left-D">
          <img src="https://sobakovod.club/uploads/posts/2021-12/1640608530_1-sobakovod-club-p-sobaki-rotveilera-v-kapyushone-1.jpg" alt="Jason Roy" />
        </div>
        <div className="right-D">
          <div><b>Jason Roy</b></div>
          <div><span>That’s Great. I am Looking<br />forward to having a great start.</span></div>
        </div>
      </div>

      {/* Пятый контакт */}
      <div>
        <div className="left-D">
          <img src="https://sobakovod.club/uploads/posts/2021-12/1640608530_1-sobakovod-club-p-sobaki-rotveilera-v-kapyushone-1.jpg" alt="Amy Frost" />
        </div>
        <div className="right-D">
          <div><b>Amy Frost</b></div>
          <div><span>Hi, will you start working on the<br />chat app right now?</span></div>
        </div>
      </div>
    </div>
  );
}

export default Left;
