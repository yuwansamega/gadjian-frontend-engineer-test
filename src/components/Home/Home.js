import React, { useEffect, Fragment } from 'react';
import UserApi from '../../common/apis/UserApi';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../redux/users/userSlice';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserApi.get().catch((err) => {
        console.log('Err :', err);
      });
      dispatch(addUsers(response.data.results));
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Header />
        <div className="flex flex-nowrap w-full h-scren">
        <Navbar />
        <Hero />
      </div>
    </Fragment>
  );
};

export default Home;
