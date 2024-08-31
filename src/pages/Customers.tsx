import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const customers1 = [
  {
    customer: "person1.jpg",
    name: "Sarah Kingston",
    email: "Sarah@gmail.com",
  },
  {
    customer: "person2.jpg",
    name: "Loveness Wilium",
    email: "Love@gmail.com",
  },
  {
    customer: "person3.jpg",
    name: "Kipipa Keneth",
    email: "kipipa@gmail.com",
  },
  {
    customer: "person4.jpg",
    name: "Patrick Jamal",
    email: "Patrick@gmail.com",
  },
  {
    customer: "person5.jpg",
    name: "Samia Jamal",
    email: "samia@gmail.com",
  },
  {
    customer: "person6.jpg",
    name: "Masai Jamal",
    email: "masai@gmail.com",
  },
];

const customers2 = [
  {
    customer: "person6.jpg",
    name: "Masai Jamal",
    email: "masai@gmail.com",
  },
  {
    customer: "person5.jpg",
    name: "Samia Jamal",
    email: "samia@gmail.com",
  },
  {
    customer: "person4.jpg",
    name: "Patrick Jamal",
    email: "Patrick@gmail.com",
  },
  {
    customer: "person3.jpg",
    name: "Kipipa Keneth",
    email: "kipipa@gmail.com",
  },
  {
    customer: "person2.jpg",
    name: "Loveness Wilium",
    email: "Love@gmail.com",
  },

  {
    customer: "person1.jpg",
    name: "Sarah Kingston",
    email: "Sarah@gmail.com",
  },
];

const Customers = () => {
  return (
    <div className="ml-4">
      <div className="font-bold m-2">Customers</div>
      <TextField
        sx={{ width: 1000 }}
        size="small"
        className=" m-2 rounded-full"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="text-slate-500" />
            </InputAdornment>
          ),
        }}
        label="Search for customers"
      />
      <div className="flex flex-row gap-4 m-1">
        {customers1.map((customer) => (
          <div className="border h-40 w-40 p-4 flex flex-col justify-center">
            <a href="/singlecustomer">
              <img src={customer.customer} className="rounded-full h-20 w-20" />
            </a>
            <div className="font-bold">{customer.name}</div>
            <div className="text-xs text-slate-400">{customer.email}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-4 m-1">
        {customers2.map((customer) => (
          <div className="border h-40 w-40 p-4 flex flex-col justify-center">
            <img src={customer.customer} className="rounded-full h-20 w-20" />
            <div className="font-bold">{customer.name}</div>
            <div className="text-xs text-slate-400">{customer.email}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 m-1">
        {customers1.map((customer) => (
          <div className="border flex-col h-40 w-40 p-4 flex  justify-center">
            <img src={customer.customer} className="rounded-full h-20 w-20" />
            <div className="font-bold">{customer.name}</div>
            <div className="text-xs text-slate-400">{customer.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
