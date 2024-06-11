import './App.css';
import Customer from './components/Customer';

function App() {
  const customers = [
    {
      id: 1,
      image: 'https://loremflickr.com/64/64',
      name: '박콩',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 2,
      image: 'https://loremflickr.com/64/64',
      name: '호야',
      birthday: '200015',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 3,
      image: 'https://loremflickr.com/64/64',
      name: '쿠키',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
  ];

  return (
    <div>
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
