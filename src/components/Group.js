import React from "react";
import "./Group.css";

export default function Group() {
  return (
    <section className="groupOuter-grp">
      <div className="groupWrap-grp">
        <div className="groupInner-grp">
          {/* CARD 1 */}
          <div className="card-grp">
            <div className="cardTop-grp">
              <div className="cardTitle-grp">
                SUBSCRIBE
                <br />
                TO CREATORS
              </div>
              <div className="cardSub-grp">you will receive $CLUB every second</div>
            </div>

            <div className="miniRow-grp">
              <div className="miniBlue-grp">
                <div className="miniAvatar-grp" />
                <div className="miniHandle-grp">baseclub.eth</div>
              </div>

              <div className="miniGreenPill-grp">20.24 $CLUB</div>
            </div>
          </div>

          {/* ARROW 1 */}
          <div className="arrowWrap-grp" aria-hidden="true">
            <svg className="arrow-grp" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 55c18-25 43-37 75-35"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M78 10c8 6 14 14 17 24"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M95 34c-9 3-18 6-28 7"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* CARD 2 */}
          <div className="card-grp">
            <div className="cardTop-grp">
              <div className="cardTitle-grp">
                CHOOSE HIGHT
                <br />
                $CLUB REWARDS
              </div>
              <div className="cardSub-grp">each account has a different of $CLUB</div>
            </div>

            <div className="rewardBar-grp">
              <div className="rewardLeft-grp">20.4220</div>
              <div className="rewardRight-grp">$CLUB</div>
            </div>

            <div className="scribbleDot-grp" aria-hidden="true">
              ↗
            </div>
          </div>

          {/* ARROW 2 */}
          <div className="arrowWrap-grp" aria-hidden="true">
            <svg className="arrow-grp" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 35c24 30 50 42 82 39"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M77 70c9-4 16-11 21-20"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M98 50c-9-1-18-3-28-7"
                fill="none"
                stroke="#111"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* CARD 3 */}
          <div className="card-grp">
            <div className="cardTop-grp">
              <div className="cardTitle-grp">
                STAKE $CLUB
                <br />
                FOR CREATORS
              </div>
              <div className="cardSub-grp">you will receive $CLUB every month</div>
            </div>

            <div className="greenBubble-grp">
              <div className="bubbleSmall-grp">EST. Monthly $CLUB</div>
              <div className="bubbleBig-grp">188.34257</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
