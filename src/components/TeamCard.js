import React from 'react'

import Image from '../components/Image'
import './TeamCard.css'

class TeamCard extends React.Component {
  state = {
    active: false
  }

  handlePopupClose = () => this.setState({ active: false })
  handlePopupOpen = () => this.setState({ active: true })

  render() {
    const { member } = this.props
    const { active } = this.state

    return (
      <div className="TeamCard--Wrap">
        <div className="TeamCard" onClick={this.handlePopupOpen}>
          {member.profileImage && (
            <div className="TeamCard--Image relative">
              <Image
                className="ProfileImage--set"
                background
                src={member.profileImage}
                alt={member.name}
              />
              <Image
                className="ProfileImage--hover"
                background
                src={member.profileImage2}
                alt={member.name}
                fade={false}
              />
            </div>
          )}
          <div className="TeamCard--Content">
            {member.name && <h4 className="TeamCard--Title">{member.name}</h4>}
            {member.occupation && <p>{member.occupation}</p>}
            <div className="Button Button--inverted">Know more</div>
          </div>
        </div>
        <div
          onClick={this.handlePopupClose}
          className={`TeamCard--Popup ${active && 'active'}`}
        >
          <div className="TeamCard--CloseButton">
            <CloseSVG />
          </div>
          <div className="TeamCard--Popup-content">
            <div className="Popup--Image relative">
              <Image
                background
                backgroundImage="contain"
                src={member.profileImage}
                alt={member.name}
              />
            </div>
            <div className="Popup--Content">
              {member.name && <h4>{member.name}</h4>}
              {member.occupation && (
                <p>
                  <strong>{member.occupation}</strong>
                </p>
              )}
              {member.bio && <p>{member.bio}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamCard

const CloseSVG = () => (
  <svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#ffffff" strokeWidth="3" fill="none">
      <path d="M2 26L27 1M2 1l25 25" />
    </g>
  </svg>
)
