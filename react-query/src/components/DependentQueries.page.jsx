import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) => axios.get(`http://localhost:4000/users/${email}`);
const fetchCoursesByChannelId = (channelId) => axios.get(`http://localhost:4000/channels/${channelId}`);

function DependentQueriesPage({ email }) {
     const { data: user, isLoading: userLoading, isError: userError, error: userErr } = useQuery(
          ['users', email],
          () => fetchUserByEmail(email)
     );

     const channelId = user?.data?.channelId;

     const {
          data: channel,
          isLoading: channelLoading,
          isError: channelError,
          error: channelErr
     } = useQuery(['channels', channelId], () => fetchCoursesByChannelId(channelId), {
          enabled: !!channelId
     });

     if (userLoading) return <p>Loading user...</p>;
     if (userError) return <p>Error loading user: {userErr.message}</p>;

     if (channelLoading) return <p>Loading channel...</p>;
     if (channelError) return <p>Error loading channel: {channelErr.message}</p>;

     return (
          <div>
               <h2>User Info</h2>
               <p>Email: {user.data.email}</p>
               <p>Channel ID: {user.data.channelId}</p>

               <h2>Channel Info</h2>
               <p>Name: {channel.data.name}</p>
               <p>Courses: {channel.data.courses?.join(', ')}</p>
          </div>
     );
}

export default DependentQueriesPage;
