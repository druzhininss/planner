import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PlansList from '../PlansList/PlansList';
import s from './Home.module.css'
import { getUserPlansAC } from '../../redux/actionCreators/plansAC';


function Home(props) {
  const { user } = useSelector(state => state.userReducer);
  const { plans } = useSelector(state => state.plansReducer);
  const dispatch = useDispatch();

  const [buttonValue, changeValue] = useState('Показать планы');
  const [plansVisibility, setVisibility] = useState(false);

  useEffect(() => {
    if (user.userId) {
      dispatch(getUserPlansAC(user.userId));
    }
  }, [dispatch, user.userId]);

  return (
    <div>
      <div>Welcome text at Home</div>
      {
        user?.login
          ?
          <input className={s['plans-button']} type="button" value={buttonValue}
            onClick={() => {
              if (plansVisibility) {
                changeValue('Показать планы');
                setVisibility(false);
              } else {
                changeValue('Спрятать мои планы');
                setVisibility(true);
              }
            }} />
          :
          <p>Здесь вы могли бы увидеть ваши планы, но вы не залогинились 🤷</p>
      }
      <div>
        {plansVisibility ? <PlansList plans={plans} /> : <></>}
      </div>

    </div>
  );
}

export default Home;

