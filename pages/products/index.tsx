import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Modal,
  Slider,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { categoryList } from "../../component/home/category_data";
import Image, { StaticImageData } from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import categoryIcon from "../../public/Images/category_Icon.svg";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import HomeIcon from "@mui/icons-material/Home";
import MuiInput from "@mui/material/Input";
//Modal Styles
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  borderRadius: "10px",
  pt: 2,
  px: 4,
  pb: 3,
};

// function ChildModal1() {
//   return (
//     <React.Fragment>
//       <Modal
//         open={openModal}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style1, width: 400 }}>
//           <Typography>Hello</Typography>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
//Child Modal function

const Product_Details = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  //category dropdown
  const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  //card selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  let [openModal, setOpenModal] = useState<boolean>(false);
  const [open1, setOpen1] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    // setSelectedCategory(categoryId);
    const selectedCategory = categoryList.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setFilteredProducts(selectedCategory.products);
    } else {
      setFilteredProducts([]);
    }

    setAge(categoryId);
  };

  //show full list of card from the very starting
  useEffect(() => {
    const allProducts: Product[] = [];
    categoryList?.forEach((category) => {
      allProducts.push(...category.products);
    });
    setFilteredProducts(allProducts);
  }, [categoryList]);

  //filter Parent Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const handleOpenModal = (modalId: String) => {
    if (modalId == "1") {
      openModal = true;
      setOpenModal(openModal);
    }
  };

  //Slider for price range
  function valueTextPrice(value: number) {
    return `${value}°C`;
  }

  const minDistancePrice = 100;
  const [valuePrice, setValuePrice] = React.useState<number[]>([200, 370]);

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistancePrice) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1000 - minDistancePrice);
        setValuePrice([clamped, clamped + minDistancePrice]);
      } else {
        const clamped = Math.max(newValue[1], minDistancePrice);
        setValuePrice([clamped - minDistancePrice, clamped]);
      }
    } else {
      setValuePrice(newValue as number[]);
    }
  };

  // SLider for House Width
  const Input = styled(MuiInput)`
    width: 42px;
  `;
  const MAX = 100;
  const MIN = 16;
  const marks = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];
  //slider for house width
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  //dropdown for countries
  interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
  }

  // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
  const countries: readonly CountryType[] = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
    { code: "AQ", label: "Antarctica", phone: "672" },
    { code: "AR", label: "Argentina", phone: "54" },
    { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", label: "Austria", phone: "43" },
    {
      code: "AU",
      label: "Australia",
      phone: "61",
      suggested: true,
    },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    {
      code: "BA",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },
    { code: "BB", label: "Barbados", phone: "1-246" },
    { code: "BD", label: "Bangladesh", phone: "880" },
    { code: "BE", label: "Belgium", phone: "32" },
    { code: "BF", label: "Burkina Faso", phone: "226" },
    { code: "BG", label: "Bulgaria", phone: "359" },
    { code: "BH", label: "Bahrain", phone: "973" },
    { code: "BI", label: "Burundi", phone: "257" },
    { code: "BJ", label: "Benin", phone: "229" },
    { code: "BL", label: "Saint Barthelemy", phone: "590" },
    { code: "BM", label: "Bermuda", phone: "1-441" },
    { code: "BN", label: "Brunei Darussalam", phone: "673" },
    { code: "BO", label: "Bolivia", phone: "591" },
    { code: "BR", label: "Brazil", phone: "55" },
    { code: "BS", label: "Bahamas", phone: "1-242" },
    { code: "BT", label: "Bhutan", phone: "975" },
    { code: "BV", label: "Bouvet Island", phone: "47" },
    { code: "BW", label: "Botswana", phone: "267" },
    { code: "BY", label: "Belarus", phone: "375" },
    { code: "BZ", label: "Belize", phone: "501" },
    {
      code: "CA",
      label: "Canada",
      phone: "1",
      suggested: true,
    },
    {
      code: "CC",
      label: "Cocos (Keeling) Islands",
      phone: "61",
    },
    {
      code: "CD",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    {
      code: "CF",
      label: "Central African Republic",
      phone: "236",
    },
    {
      code: "CG",
      label: "Congo, Republic of the",
      phone: "242",
    },
    { code: "CH", label: "Switzerland", phone: "41" },
    { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    { code: "CK", label: "Cook Islands", phone: "682" },
    { code: "CL", label: "Chile", phone: "56" },
    { code: "CM", label: "Cameroon", phone: "237" },
    { code: "CN", label: "China", phone: "86" },
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "CR", label: "Costa Rica", phone: "506" },
    { code: "CU", label: "Cuba", phone: "53" },
    { code: "CV", label: "Cape Verde", phone: "238" },
    { code: "CW", label: "Curacao", phone: "599" },
    { code: "CX", label: "Christmas Island", phone: "61" },
    { code: "CY", label: "Cyprus", phone: "357" },
    { code: "CZ", label: "Czech Republic", phone: "420" },
    {
      code: "DE",
      label: "Germany",
      phone: "49",
      suggested: true,
    },
    { code: "DJ", label: "Djibouti", phone: "253" },
    { code: "DK", label: "Denmark", phone: "45" },
    { code: "DM", label: "Dominica", phone: "1-767" },
    {
      code: "DO",
      label: "Dominican Republic",
      phone: "1-809",
    },
    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },
    {
      code: "FK",
      label: "Falkland Islands (Malvinas)",
      phone: "500",
    },
    {
      code: "FM",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    {
      code: "FR",
      label: "France",
      phone: "33",
      suggested: true,
    },
    { code: "GA", label: "Gabon", phone: "241" },
    { code: "GB", label: "United Kingdom", phone: "44" },
    { code: "GD", label: "Grenada", phone: "1-473" },
    { code: "GE", label: "Georgia", phone: "995" },
    { code: "GF", label: "French Guiana", phone: "594" },
    { code: "GG", label: "Guernsey", phone: "44" },
    { code: "GH", label: "Ghana", phone: "233" },
    { code: "GI", label: "Gibraltar", phone: "350" },
    { code: "GL", label: "Greenland", phone: "299" },
    { code: "GM", label: "Gambia", phone: "220" },
    { code: "GN", label: "Guinea", phone: "224" },
    { code: "GP", label: "Guadeloupe", phone: "590" },
    { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GR", label: "Greece", phone: "30" },
    {
      code: "GS",
      label: "South Georgia and the South Sandwich Islands",
      phone: "500",
    },
    { code: "GT", label: "Guatemala", phone: "502" },
    { code: "GU", label: "Guam", phone: "1-671" },
    { code: "GW", label: "Guinea-Bissau", phone: "245" },
    { code: "GY", label: "Guyana", phone: "592" },
    { code: "HK", label: "Hong Kong", phone: "852" },
    {
      code: "HM",
      label: "Heard Island and McDonald Islands",
      phone: "672",
    },
    { code: "HN", label: "Honduras", phone: "504" },
    { code: "HR", label: "Croatia", phone: "385" },
    { code: "HT", label: "Haiti", phone: "509" },
    { code: "HU", label: "Hungary", phone: "36" },
    { code: "ID", label: "Indonesia", phone: "62" },
    { code: "IE", label: "Ireland", phone: "353" },
    { code: "IL", label: "Israel", phone: "972" },
    { code: "IM", label: "Isle of Man", phone: "44" },
    { code: "IN", label: "India", phone: "91" },
    {
      code: "IO",
      label: "British Indian Ocean Territory",
      phone: "246",
    },
    { code: "IQ", label: "Iraq", phone: "964" },
    {
      code: "IR",
      label: "Iran, Islamic Republic of",
      phone: "98",
    },
    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    {
      code: "JP",
      label: "Japan",
      phone: "81",
      suggested: true,
    },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    {
      code: "KN",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code: "KP",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    {
      code: "LA",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },
    { code: "LB", label: "Lebanon", phone: "961" },
    { code: "LC", label: "Saint Lucia", phone: "1-758" },
    { code: "LI", label: "Liechtenstein", phone: "423" },
    { code: "LK", label: "Sri Lanka", phone: "94" },
    { code: "LR", label: "Liberia", phone: "231" },
    { code: "LS", label: "Lesotho", phone: "266" },
    { code: "LT", label: "Lithuania", phone: "370" },
    { code: "LU", label: "Luxembourg", phone: "352" },
    { code: "LV", label: "Latvia", phone: "371" },
    { code: "LY", label: "Libya", phone: "218" },
    { code: "MA", label: "Morocco", phone: "212" },
    { code: "MC", label: "Monaco", phone: "377" },
    {
      code: "MD",
      label: "Moldova, Republic of",
      phone: "373",
    },
    { code: "ME", label: "Montenegro", phone: "382" },
    {
      code: "MF",
      label: "Saint Martin (French part)",
      phone: "590",
    },
    { code: "MG", label: "Madagascar", phone: "261" },
    { code: "MH", label: "Marshall Islands", phone: "692" },
    {
      code: "MK",
      label: "Macedonia, the Former Yugoslav Republic of",
      phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
    {
      code: "MP",
      label: "Northern Mariana Islands",
      phone: "1-670",
    },
    { code: "MQ", label: "Martinique", phone: "596" },
    { code: "MR", label: "Mauritania", phone: "222" },
    { code: "MS", label: "Montserrat", phone: "1-664" },
    { code: "MT", label: "Malta", phone: "356" },
    { code: "MU", label: "Mauritius", phone: "230" },
    { code: "MV", label: "Maldives", phone: "960" },
    { code: "MW", label: "Malawi", phone: "265" },
    { code: "MX", label: "Mexico", phone: "52" },
    { code: "MY", label: "Malaysia", phone: "60" },
    { code: "MZ", label: "Mozambique", phone: "258" },
    { code: "NA", label: "Namibia", phone: "264" },
    { code: "NC", label: "New Caledonia", phone: "687" },
    { code: "NE", label: "Niger", phone: "227" },
    { code: "NF", label: "Norfolk Island", phone: "672" },
    { code: "NG", label: "Nigeria", phone: "234" },
    { code: "NI", label: "Nicaragua", phone: "505" },
    { code: "NL", label: "Netherlands", phone: "31" },
    { code: "NO", label: "Norway", phone: "47" },
    { code: "NP", label: "Nepal", phone: "977" },
    { code: "NR", label: "Nauru", phone: "674" },
    { code: "NU", label: "Niue", phone: "683" },
    { code: "NZ", label: "New Zealand", phone: "64" },
    { code: "OM", label: "Oman", phone: "968" },
    { code: "PA", label: "Panama", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
    { code: "PF", label: "French Polynesia", phone: "689" },
    { code: "PG", label: "Papua New Guinea", phone: "675" },
    { code: "PH", label: "Philippines", phone: "63" },
    { code: "PK", label: "Pakistan", phone: "92" },
    { code: "PL", label: "Poland", phone: "48" },
    {
      code: "PM",
      label: "Saint Pierre and Miquelon",
      phone: "508",
    },
    { code: "PN", label: "Pitcairn", phone: "870" },
    { code: "PR", label: "Puerto Rico", phone: "1" },
    {
      code: "PS",
      label: "Palestine, State of",
      phone: "970",
    },
    { code: "PT", label: "Portugal", phone: "351" },
    { code: "PW", label: "Palau", phone: "680" },
    { code: "PY", label: "Paraguay", phone: "595" },
    { code: "QA", label: "Qatar", phone: "974" },
    { code: "RE", label: "Reunion", phone: "262" },
    { code: "RO", label: "Romania", phone: "40" },
    { code: "RS", label: "Serbia", phone: "381" },
    { code: "RU", label: "Russian Federation", phone: "7" },
    { code: "RW", label: "Rwanda", phone: "250" },
    { code: "SA", label: "Saudi Arabia", phone: "966" },
    { code: "SB", label: "Solomon Islands", phone: "677" },
    { code: "SC", label: "Seychelles", phone: "248" },
    { code: "SD", label: "Sudan", phone: "249" },
    { code: "SE", label: "Sweden", phone: "46" },
    { code: "SG", label: "Singapore", phone: "65" },
    { code: "SH", label: "Saint Helena", phone: "290" },
    { code: "SI", label: "Slovenia", phone: "386" },
    {
      code: "SJ",
      label: "Svalbard and Jan Mayen",
      phone: "47",
    },
    { code: "SK", label: "Slovakia", phone: "421" },
    { code: "SL", label: "Sierra Leone", phone: "232" },
    { code: "SM", label: "San Marino", phone: "378" },
    { code: "SN", label: "Senegal", phone: "221" },
    { code: "SO", label: "Somalia", phone: "252" },
    { code: "SR", label: "Suriname", phone: "597" },
    { code: "SS", label: "South Sudan", phone: "211" },
    {
      code: "ST",
      label: "Sao Tome and Principe",
      phone: "239",
    },
    { code: "SV", label: "El Salvador", phone: "503" },
    {
      code: "SX",
      label: "Sint Maarten (Dutch part)",
      phone: "1-721",
    },
    {
      code: "SY",
      label: "Syrian Arab Republic",
      phone: "963",
    },
    { code: "SZ", label: "Swaziland", phone: "268" },
    {
      code: "TC",
      label: "Turks and Caicos Islands",
      phone: "1-649",
    },
    { code: "TD", label: "Chad", phone: "235" },
    {
      code: "TF",
      label: "French Southern Territories",
      phone: "262",
    },
    { code: "TG", label: "Togo", phone: "228" },
    { code: "TH", label: "Thailand", phone: "66" },
    { code: "TJ", label: "Tajikistan", phone: "992" },
    { code: "TK", label: "Tokelau", phone: "690" },
    { code: "TL", label: "Timor-Leste", phone: "670" },
    { code: "TM", label: "Turkmenistan", phone: "993" },
    { code: "TN", label: "Tunisia", phone: "216" },
    { code: "TO", label: "Tonga", phone: "676" },
    { code: "TR", label: "Turkey", phone: "90" },
    {
      code: "TT",
      label: "Trinidad and Tobago",
      phone: "1-868",
    },
    { code: "TV", label: "Tuvalu", phone: "688" },
    {
      code: "TW",
      label: "Taiwan",
      phone: "886",
    },
    {
      code: "TZ",
      label: "United Republic of Tanzania",
      phone: "255",
    },
    { code: "UA", label: "Ukraine", phone: "380" },
    { code: "UG", label: "Uganda", phone: "256" },
    {
      code: "US",
      label: "United States",
      phone: "1",
      suggested: true,
    },
    { code: "UY", label: "Uruguay", phone: "598" },
    { code: "UZ", label: "Uzbekistan", phone: "998" },
    {
      code: "VA",
      label: "Holy See (Vatican City State)",
      phone: "379",
    },
    {
      code: "VC",
      label: "Saint Vincent and the Grenadines",
      phone: "1-784",
    },
    { code: "VE", label: "Venezuela", phone: "58" },
    {
      code: "VG",
      label: "British Virgin Islands",
      phone: "1-284",
    },
    {
      code: "VI",
      label: "US Virgin Islands",
      phone: "1-340",
    },
    { code: "VN", label: "Vietnam", phone: "84" },
    { code: "VU", label: "Vanuatu", phone: "678" },
    { code: "WF", label: "Wallis and Futuna", phone: "681" },
    { code: "WS", label: "Samoa", phone: "685" },
    { code: "XK", label: "Kosovo", phone: "383" },
    { code: "YE", label: "Yemen", phone: "967" },
    { code: "YT", label: "Mayotte", phone: "262" },
    { code: "ZA", label: "South Africa", phone: "27" },
    { code: "ZM", label: "Zambia", phone: "260" },
    { code: "ZW", label: "Zimbabwe", phone: "263" },
  ];
  interface Category {
    id: string;
    name: string;
    products: Product[];
  }
  interface Product {
    id: string;
    name: string;
    img: StaticImageData;
    heading: string;
    price: string;
    title1: string;
    title2: string;
    titleText1: string;
    titleText2: string;
  }
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 2 }}>
        <Grid container sx={{ marginLeft: 1 }}>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{
              borderRight: "2px solid #B12930",
              paddingRight: "7vh",
              // minWidth: "20vh",
            }}
          >
            <FormControl sx={{ width: "100%" }} size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  backgroundColor: "white",
                  paddingRight: "1vh",
                  color: "black",
                  fontFamily: "Jacques Francois",
                }}
              >
                {/* <Image
                  src={categoryIcon}
                  alt="category Icon"
                  style={{ marginRight: 5 }}
                /> */}
                Category
              </InputLabel>
              <Select
                value={age}
                label={"Age"}
                autoWidth
                onChange={(event) => handleCategoryChange(event.target.value)}
              >
                <MenuItem
                  value={"1"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Single Detached
                </MenuItem>
                <MenuItem
                  value={"2"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Semi Detached
                </MenuItem>

                <MenuItem
                  value={"3"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Acreage
                </MenuItem>
                <MenuItem
                  value={"4"}
                  sx={{
                    fontSize: {
                      xs: "14px",

                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  Garage Suite
                </MenuItem>
                <MenuItem
                  value={"5"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    fontFamily: "Times New Roman",
                  }}
                >
                  FourPlex
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid
            item
            xs={6}
            sm={8}
            md={9}
            lg={10}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "1vh",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "22px",
                      xl: "24px",
                    },
                    fontFamily: "Times New Roman",
                    marginRight: "2vh",
                  }}
                >
                  Sort By:
                </Typography>

                <Button
                  onClick={handleOpen}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "20px",
                    },
                    paddingX: { xs: "3vh", sm: "4vh", md: "5vh", lg: "7vh" }, // Media Query to be applied at 350px
                    fontFamily: "Times New Roman",
                    color: "#B12930",
                    borderTop: "2px solid white",
                    borderLeft: "2px solid white",
                    borderRight: "2px solid white",
                    borderBottom: "2px solid #B12930",
                    ":hover": {
                      boxShadow: "none",
                      border: "2px solid #b12930",
                      color: "#b12930 !important",
                    },
                  }}
                >
                  Featured
                </Button>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                // sx={{ overflowY: "scroll" }}
              >
                <Box
                  sx={{
                    ...style,
                    width: { xs: 300, sm: 400, md: 500, lg: 600 },
                    height: { xs: 300, sm: 400, md: 500, lg: 600 },
                    overflowY: "scroll",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // position: "fixed",
                      // top: " 0",
                      // width: "100%",
                      // overflow: "hidden",
                    }}
                  >
                    <CloseIcon
                      onClick={() => handleClose()}
                      sx={{
                        cursor: "pointer",
                        paddingX: "1vh",
                        fontSize: "5vh",
                        ":hover": {
                          color: "#b12930 !important",
                        },
                      }}
                    />
                    <Box width={"100%"} sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                            lg: "24px",
                            xl: "26px",
                          },
                          fontFamily: "Times New Roman",
                          marginBottom: "1vh",
                        }}
                      >
                        Filter
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ color: "black" }}></Divider>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginY: "2vh",
                      }}
                    >
                      Property Type
                    </Typography>
                    <Box>
                      <Grid container sx={{ marginBottom: "1vh" }}>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Single Detached
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Semi Detached
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            FourPlex
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Acreage
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          sx={{
                            border: "1px solid white",
                            paddingBottom: "1vh",
                            paddingTop: "1vh",
                            paddingLeft: "2vh",

                            ":hover": {
                              border: "1px solid #b12930",
                              borderRadius: "10px",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <HomeIcon sx={{ fontSize: "30px" }} />

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "10px",
                                sm: "12px",
                                md: "14px",
                                lg: "22px",
                                xl: "20px",
                              },
                              fontFamily: "Times New Roman",
                              marginY: "2vh",
                            }}
                          >
                            Garage Suite
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginY: { xs: "1.5vh", lg: "2vh" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpenModal("1")}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "22px",
                          xl: "24px",
                        },
                        fontFamily: "Times New Roman",
                        marginY: { xs: "0vh", lg: "1vh" },
                      }}
                    >
                      Dealers{" "}
                    </Typography>
                    <KeyboardDoubleArrowRightRoundedIcon
                      sx={{
                        color: "#b12930",
                        fontSize: "30px",
                      }}
                    />
                  </Box> */}
                  {/* {openModal && <ChildModal1 />} */}

                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      Price Range
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "20px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={valuePrice}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueTextPrice}
                        max={1000}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginY: "2vh",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid black",
                          borderRadius: "10px",

                          width: "35%",
                          paddingLeft: "2vh",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Minimum Price:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                          }}
                        >
                          {valuePrice[0]}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          border: "1px solid black",
                          borderRadius: "10px",

                          width: "35%",
                          paddingLeft: "2vh",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Maximum Price:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                          }}
                        >
                          {valuePrice[1]}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                        marginBottom: "1vh",
                      }}
                    >
                      Select a Country
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "2vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Typography>
                    <Box>
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: "100%" }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password", // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      Price Range
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "20px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={valuePrice}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueTextPrice}
                        max={1000}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginY: "2vh",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid black",
                          borderRadius: "10px",

                          width: "35%",
                          paddingLeft: "2vh",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Minimum Price:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                          }}
                        >
                          {valuePrice[0]}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          border: "1px solid black",
                          borderRadius: "10px",

                          width: "35%",
                          paddingLeft: "2vh",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                            marginBottom: "2vh",
                          }}
                        >
                          Maximum Price:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "20px",
                              xl: "20px",
                            },
                            fontFamily: "Times New Roman",
                          }}
                        >
                          {valuePrice[1]}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      House Width
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        paddingX: "5vh",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          alignItems: "center",
                          paddingRight: "3vh",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Slider
                            marks={marks}
                            step={10}
                            value={typeof value === "number" ? value : 0}
                            valueLabelDisplay="auto"
                            min={MIN}
                            max={MAX}
                            onChange={handleSliderChange}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body2"
                            onClick={() => setValue(MIN)}
                            sx={{ cursor: "pointer" }}
                          >
                            {MIN} min
                          </Typography>
                          <Typography
                            variant="body2"
                            onClick={() => setValue(MAX)}
                            sx={{ cursor: "pointer" }}
                          >
                            {MAX} max
                          </Typography>
                        </Box>
                      </Box>
                      <Grid item>
                        <Input
                          value={value}
                          size="small"
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </Grid>
                    </Box>
                  </Box>
                  <Divider />
                  {/* <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      House Width
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                      />
                    </Box>
                  </Box> */}
                  <Divider />
                  {/* <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "26px",
                          xl: "24px",
                        },
                        fontFamily: "Jacques Francois",
                        marginTop: "2vh",
                      }}
                    >
                      House Width
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "12px",
                          md: "14px",
                          lg: "18px",
                          xl: "2px",
                        },
                        fontFamily: "Jacques Francois",
                        marginBottom: "3vh",
                        color: "GrayText",
                      }}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{ width: "100%", paddingX: "5vh" }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance shift"}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                      />
                    </Box>
                  </Box> */}
                  <Divider />
                </Box>
              </Modal>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          sx={{
            marginBottom: "2vh",
            paddingX: "0vh",
          }}
        >
          {filteredProducts.map((product: Product) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  padding: "1vh 1vh 0vh 1vh",
                  marginBottom: "4vh",
                  mx: { sm: "1vh" },
                  width: "100%",
                  border: "1px solid #C9C1BA",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{
                    height: { xs: "220px", lg: "170px" },
                    // cursor: "pointer",
                  }}
                  src={product.img.src}
                />
                <CardContent sx={{ paddingTop: "0vh" }}>
                  <Typography
                    component="div"
                    sx={{
                      marginTop: { xs: "1vh", lg: "2vh" },
                      fontSize: { xs: "22px", sm: "20px", lg: "22px" },
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {isMobile
                      ? product.heading.slice(0, 20)
                      : product.heading.slice(0, 20)}
                    ...
                  </Typography>
                  <Typography
                    color="#B12930"
                    sx={{
                      marginTop: { xs: "1vh", lg: "2vh" },
                      fontSize: { xs: "22px", sm: "20px", lg: "22px" },
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Box
                    display={"flex"}
                    sx={{
                      marginTop: "2vh",
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: {
                          xs: "4vh",
                          md: "3vh",
                          lg: "4vh",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.title1.slice(0, 20)
                          : product.title1.slice(0, 10)}
                        ...
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.titleText1.slice(0, 10)
                          : product.titleText1.slice(0, 10)}
                        ...
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.title2.slice(0, 20)
                          : product.title2.slice(0, 10)}
                        ...
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "Times New Roman",
                          textTransform: "capitalize",
                          fontSize: {
                            xs: "18px",
                            sm: "16px",
                            lg: "18px",
                          },
                        }}
                      >
                        {isMobile
                          ? product.titleText2.slice(0, 10)
                          : product.titleText2.slice(0, 10)}
                        ...
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-around"}
                    py="1vh"
                  >
                    <Button
                      sx={{
                        mx: "1vh",
                        padding: "1vh 2.3vh",
                        fontFamily: "Times New Roman ",
                        color: "white",
                        backgroundColor: "#B12930",
                        "&:hover": {
                          backgroundColor: "hsl(357,62%,55%)",
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      sx={{
                        mx: "1vh",
                        padding: "1vh 2vh",
                        fontFamily: "Times New Roman ",
                        color: "black",
                        border: "2px solid black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product_Details;
