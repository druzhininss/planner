import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserPlansAC } from '../../redux/actionCreators/plansAC';
import { useHistory } from 'react-router-dom';
import PlansList from '../PlansList/PlansList';
import ModalAddPlans from '../ModalAddPlans/ModalAddPlans';
import ModalEditPlans from '../ModalEditPlans/ModalEditPlans';
import s from './Home.module.css'


function Home(props) {
  const { user } = useSelector(state => state.userReducer);
  const { plans } = useSelector(state => state.plansReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [buttonValue, changeValue] = useState('Показать мои планы 👀');
  const [plansVisibility, setVisibility] = useState(false);
  const [addPlansModal, setPlansModal] = useState(false);
  const [editPlansModal, setEditModal] = useState(false);

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
          <>
            <div className={s['buttons-container']}>
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
              {
                plansVisibility
                &&
                <input className={s['plans-update-button']} type="button" value="🔄"
                  onClick={() => {
                    dispatch(getUserPlansAC(user.userId));
                  }} />
              }
              <input className={s['plans-button']} type="button" value="Добавить планы"
                onClick={() => {
                  setPlansModal(!addPlansModal);
                }} />
            </div>

            <div>
              {addPlansModal && <ModalAddPlans isOpened={setPlansModal} />}
              {editPlansModal && <ModalEditPlans setEditModal={setEditModal} planId={editPlansModal} />}
            </div>
          </>
          :
          <div className={s['buttons-container']}>
            <input className={s['plans-button-disabled']} type="button"
              value="Здесь вы могли бы увидеть ваши планы, но вы не залогинились 🤷"
              onClick={() => history.push('/login')} />
          </div>

      }

      {
        (plansVisibility && plans.length > 0)
          ?
          <PlansList plans={plans} setEditModal={setEditModal} />
          :
          plansVisibility && <p>Планов нет 🤷</p>
      }

    </div>
  );
}

export default Home;

