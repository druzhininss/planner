import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PlansList from '../PlansList/PlansList';
import { getUserPlansAC } from '../../redux/actionCreators/plansAC';
import s from './Home.module.css'
import { useHistory } from 'react-router-dom';


function Home(props) {
  const { user } = useSelector(state => state.userReducer);
  const { plans } = useSelector(state => state.plansReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [buttonValue, changeValue] = useState('Показать мои планы 👀');
  const [plansVisibility, setVisibility] = useState(false);

  useEffect(() => {
    if (user.userId) {
      dispatch(getUserPlansAC(user.userId));
    }
  }, [dispatch, user.userId]);

  return (
    <div>
      {
        user?.login
          ?
          <input className={s['plans-button']} type="button" value={buttonValue}
            onClick={() => {
              if (plansVisibility) {
                changeValue('Показать мои планы 👀');
                setVisibility(false);
              } else {
                changeValue('Скрыть мои планы 🙈');
                setVisibility(true);
              }
            }} />
          :
          <input className={s['plans-button-disabled']} type="button"
            value="Здесь вы могли бы увидеть ваши планы, но вы не залогинились 🤷"
            onClick={() => history.push('/login')} />

      }
      <div>
        {plansVisibility ? <PlansList plans={plans} /> : <></>}
      </div>

    </div>
  );
}

export default Home;

