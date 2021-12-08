import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodData {
 
  id: number
  name: string
  available: boolean
  description: string
  price: string
  image: string

}

interface dataModalEditFood {
  food?: FoodData;
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodData) => void;
  editingFood: FoodData;
}


const ModalEditFood = ({isOpen, setIsOpen, handleUpdateFood, editingFood }: dataModalEditFood) => {
  const formRef = useRef(null);

    const handleSubmit = async (data: FoodData) => {
      handleUpdateFood(data);
      setIsOpen();
    };
  

//class ModalEditFood extends Component {
  // constructor(props) {
  //  super(props);

    //this.formRef = createRef()
  //}


    //const { setIsOpen, handleUpdateFood } = this.props;

  
  //render() {
    //const { isOpen, setIsOpen, editingFood } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
          <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

          <Input name="description" placeholder="Descrição" icon={undefined} />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  };

export default ModalEditFood;
