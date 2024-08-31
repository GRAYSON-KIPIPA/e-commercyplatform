import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const sellers2 = [
  {
    seller: "person1.jpg",
    name: "Sarah Kingston",
    email: "Sarah@gmail.com",
  },
  {
    seller: "person2.jpg",
    name: "Loveness Wilium",
    email: "Love@gmail.com",
  },
  {
    seller: "person3.jpg",
    name: "Kipipa Keneth",
    email: "kipipa@gmail.com",
  },
  {
    seller: "person4.jpg",
    name: "Patrick Jamal",
    email: "Patrick@gmail.com",
  },
  {
    seller: "person5.jpg",
    name: "Samia Jamal",
    email: "samia@gmail.com",
  },
  {
    seller: "person6.jpg",
    name: "Masai Jamal",
    email: "masai@gmail.com",
  },
];

const sellers1 = [
  {
    seller: "person6.jpg",
    name: "Masai Jamal",
    email: "masai@gmail.com",
  },
  {
    seller: "person5.jpg",
    name: "Samia Jamal",
    email: "samia@gmail.com",
  },
  {
    seller: "person4.jpg",
    name: "Patrick Jamal",
    email: "Patrick@gmail.com",
  },
  {
    seller: "person3.jpg",
    name: "Kipipa Keneth",
    email: "kipipa@gmail.com",
  },
  {
    seller: "person2.jpg",
    name: "Loveness Wilium",
    email: "Love@gmail.com",
  },

  {
    seller: "person1.jpg",
    name: "Sarah Kingston",
    email: "Sarah@gmail.com",
  },
];

const Sellers = () => {
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
        label="Search for sellers"
      />
      <div className="flex flex-row gap-4 m-1">
        {sellers1.map((seller) => (
          <div className="border h-40 w-40 p-4 flex flex-col justify-center">
            <a href="/singleseller">
              <img src={seller.seller} className="rounded-full h-20 w-20" />
            </a>
            <div className="font-bold">{seller.name}</div>
            <div className="text-xs text-slate-400">{seller.email}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-4 m-1">
        {sellers2.map((seller) => (
          <div className="border h-40 w-40 p-4 flex flex-col justify-center">
            <img src={seller.seller} className="rounded-full h-20 w-20" />
            <div className="font-bold">{seller.name}</div>
            <div className="text-xs text-slate-400">{seller.email}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 m-1">
        {sellers1.map((seller) => (
          <div className="border flex-col h-40 w-40 p-4 flex  justify-center">
            <img src={seller.seller} className="rounded-full h-20 w-20" />
            <div className="font-bold">{seller.name}</div>
            <div className="text-xs text-slate-400">{seller.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
