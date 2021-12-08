import { Component, useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

interface FoodData {
 
  id: number
  name: string
  available: boolean
  description: string
  price: string
  image: string

}

const Dashboard = () => {

  const [foods, setFoods] = useState<FoodData[]>([]);
  const [editingFood, setEditingFood] = useState<FoodData>({} as FoodData)
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)


//class Dashboard extends Component {
  //constructor(props) {
    //super(props);
   // this.state = {
    //  foods: [],
      //editingFood: {},
     // modalOpen: false,
     // editModalOpen: false,
    //}
  //}

  useEffect(() => {
    const cartFood = async () => {
    const response = await api.get('/foods');

    setFoods(response.data);
    }

    cartFood()
  },[])


 /* async function componentDidMount() {
    const response = await api.get('/foods');

    return setFoods([...foods, response.data]);
  }*/

  const handleAddFood = async (food: any) => {
   // const { foods } = this.state;

    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateFood = async (food: any) => {
    //const { foods, editingFood } = this.state;

    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      setFoods(foodsUpdated)
      //this.setState({ foods: foodsUpdated });
    } catch (err) {
      console.log(err);
    }
  }

 const handleDeleteFood = async (id: number) => {
    //const { foods } = this.state;

    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered)
    //this.setState({ foods: foodsFiltered });
  }

  const toggleModal = () => {
    //const { modalOpen } = this.state;

    setModalOpen(!modalOpen)
    //this.setState({ modalOpen: !modalOpen });
  }

  const toggleEditModal = () => {
    //const { editModalOpen } = this.state;

    setEditModalOpen(!editModalOpen)
    //this.setState({ editModalOpen: !editModalOpen });
  }

  const handleEditFood = (food: any) => {
    setEditModalOpen(true)
    setEditingFood(food)
    //this.setState({ editingFood: food, editModalOpen: true });
  }

  //render() {
    //const { modalOpen, editModalOpen, editingFood, foods } = this.state;

    return (
      <>
        <Header openModal={toggleModal} />
        <ModalAddFood
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handleAddFood={handleAddFood}
        />
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
          editingFood={editingFood}
          handleUpdateFood={handleUpdateFood}
        />

        <FoodsContainer data-testid="foods-list">
          {foods &&
            foods.map(food => (
              <Food
                key={food.id}
                food={food}
                handleDelete={handleDeleteFood}
                handleEditFood={handleEditFood}
              />
            ))}
        </FoodsContainer>
      </>
    );
  }


export default Dashboard;
