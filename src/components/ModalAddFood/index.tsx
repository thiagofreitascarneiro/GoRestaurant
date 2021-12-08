import { Component, createRef, useRef, useState, useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

export interface FoodData {
 
  id: number
  name: string
  available: boolean
  description: string
  price: string
  image: string

}
interface dataModalAddFood {
  food?: FoodData;
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodData) => void;
  
}

const ModalAddFood = ({food, isOpen, setIsOpen, handleAddFood}: dataModalAddFood ) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodData) => {
    //const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };


//class ModalAddFood extends Component {
 // constructor(props) {
//    super(props);

    //this.formRef = createRef();
  //}

  //handleSubmit = async data => {
    //const { setIsOpen, handleAddFood } = this.props;

   // handleAddFood(data);
    //setIsOpen();
  //};

  //render() {
    //const { isOpen, setIsOpen } = this.props;
    

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
          <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

          <Input name="description" placeholder="Descrição" icon={undefined} />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  };


export default ModalAddFood;
