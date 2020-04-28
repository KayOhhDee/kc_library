import React from 'react';

const PublisherGroup = ({group}) => {
  return (
    <div className="group-container">
      <h3 className="group-title">{group.group}</h3>
      <ul>
        {group.members.map((member) => (
          <li><span>{member.name}</span> <span>{member.contact}</span></li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default PublisherGroup;
