import React, { useEffect, useState } from 'react'
import GroupItem from '../group-item/GroupItem';
import groupsService from '../../../services/groups-service';

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchGroups() {
      const groups = await groupsService.list();
      setGroups(groups);
    }
    fetchGroups();
  }, []);

  return (
    <ul>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </ul>
  )
}

export default GroupList