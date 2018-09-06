const jsonData = {
	"data": {
		"buildings": [{
			"id": "1",
			"name": "Ackerman Rd, 650",
			"latitude": "40.01899831",
			"longitude": "-83.02985918",
			"address": "650 Ackerman Rd",
			"buildingCode": null,
			"buildingNumber": "241",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=241&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "2",
			"name": "Ackerman Rd, 660",
			"latitude": "40.01890529",
			"longitude": "-83.03061545",
			"address": "660 Ackerman Rd",
			"buildingCode": null,
			"buildingNumber": "242",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=242&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 667, contact Cindy Kratzer at 614-293-3685"
			}],
			"departments": [{
				"name": "Medical Center Administration Operations ",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "5",
			"name": "Adventure Recreation Center",
			"latitude": "40.00268456",
			"longitude": "-83.03176181",
			"address": "855 Woody Hayes Dr",
			"buildingCode": "AR",
			"buildingNumber": "211",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=211&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": "<p><strong><a href='http://recsports.osu.edu/locations_arc.asp'>Adventure Recreation Center (ARC)</a></strong><br>West Campus recreation facility with four hardwood basketball courts (and five volleyball courts), indoor turf fields, free weights, strength training machines, and cardio equipment. Day-use locker and individual shower facilities. Fully accessible and air-conditioned.</p>"
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "https://recsports.osu.edu/facilities/adventure-recreation-center-arc"
			}]
		}, {
			"id": "8",
			"name": "Agricultural Administration",
			"latitude": "40.00542636",
			"longitude": "-83.02722587",
			"address": "2120 Fyffe Rd",
			"buildingCode": "AA",
			"buildingNumber": "003",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=003&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "Lane Avenue Gardens and Chadwick Arboretum"
			}, {
				"name": "Computing",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/faes/index.php'>Food, Agricultural and Environmental Sciences Library</a><br>045 Agricultural Administration Building<br>2120 Fyffe Road<br>292-6125"
			}, {
				"name": "Lactation Room",
				"info": "Room 210, contact Melissa Krygier 292-6891"
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,"
			}],
			"departments": [{
				"name": "Food, Agriculture and Environmental Sciences",
				"url": "https://library.osu.edu/about/locations/faes-library-and-student-success-center/"
			}, {
				"name": "International Programs In Agriculture",
				"url": "http://cfaes.osu.edu/international.php"
			}, {
				"name": "Agricultural, Environmental, and Development Economics",
				"url": "http://aede.osu.edu/"
			}, {
				"name": "Human and Community Resource Development (Fd,AgandEnv Sci)",
				"url": "https://ucat.osu.edu/professional-development/learning-communities/ostep/graduate-teaching-fellows/reports/human-community-resource-development/"
			}, {
				"name": "Food, Agricultural and Environmental Sciences Library",
				"url": "http://library.osu.edu/sites/faes/index.php"
			}, {
				"name": "Extension-Administration",
				"url": "https://extension.osu.edu/"
			}, {
				"name": "Extension Agriculture and Natural Resources",
				"url": "http://agnr.osu.edu/"
			}, {
				"name": "Extension-4H",
				"url": "http://www.ohio4h.org/"
			}, {
				"name": "Ohio Agricultural Research and Development Center",
				"url": "https://oardc.osu.edu/"
			}, {
				"name": "CFAES Café",
				"url": "https://dining.osu.edu/dininglocations/cfaes-cafe/"
			}, {
				"name": "College of Food, Agriculture, and Environmental Science ",
				"url": "https://cfaes.osu.edu/index.php"
			}]
		}, {
			"id": "9",
			"name": "Agricultural Engineering Building",
			"latitude": "40.00551784",
			"longitude": "-83.02498459",
			"address": "590 Woody Hayes Dr",
			"buildingCode": "AE",
			"buildingNumber": "298",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=298&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "U.S. Department of Agriculture",
				"url": "https://fabe.osu.edu/our-people/usda"
			}, {
				"name": "Department of Food, Agricultural and Biological Engineering",
				"url": "https://fabe.osu.edu/"
			}, {
				"name": "Farm Science Review",
				"url": "https://fsr.osu.edu/"
			}]
		}, {
			"id": "10",
			"name": "Waterman - Agronomy Field Greenhouse",
			"latitude": "40.01424609",
			"longitude": "-83.0456435",
			"address": "2551 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "952",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=952&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "13",
			"name": "Waterman - Agronomy Pole Barn",
			"latitude": "40.01489463",
			"longitude": "-83.04030533",
			"address": "2623 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "937",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=937&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "14",
			"name": "Waterman - Agronomy Turf Research",
			"latitude": "40.01417674",
			"longitude": "-83.04544415",
			"address": "2551 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "992",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=992&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "15",
			"name": "Animal House Kinnear Research Center",
			"latitude": "39.99952129",
			"longitude": "-83.04308026",
			"address": "1314 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "174",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=174&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "16",
			"name": "Animal Science Building",
			"latitude": "40.00363109",
			"longitude": "-83.02864867",
			"address": "2029 Fyffe Rd",
			"buildingCode": "AS",
			"buildingNumber": "156",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=156&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Animal Sciences",
				"url": "https://ansci.osu.edu/"
			}]
		}, {
			"id": "17",
			"name": "Archer House",
			"latitude": "40.00527853",
			"longitude": "-83.0140993",
			"address": "2130 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "261",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=261&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,"
			}],
			"departments": [{
				"name": "Archer House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/archer-house"
			}]
		}, {
			"id": "18",
			"name": "Aronoff Laboratory",
			"latitude": "39.99678149",
			"longitude": "-83.01676517",
			"address": "318 W 12th Ave",
			"buildingCode": "AL",
			"buildingNumber": "131",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=131&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Evolution, Ecology and Organismal Biology",
				"url": "https://eeob.osu.edu/"
			}]
		}, {
			"id": "19",
			"name": "Arps Hall",
			"latitude": "40.00193109",
			"longitude": "-83.00946551",
			"address": "1945 N High St",
			"buildingCode": "AP",
			"buildingNumber": "011",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=011&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 6, contact Kirsten Wycuff 292-6991"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Economics",
				"url": "https://economics.osu.edu/"
			}, {
				"name": "College of Education and Human Ecology Administration",
				"url": "http://ehe.osu.edu/"
			}, {
				"name": "English as a Second Language",
				"url": "http://esl.ehe.osu.edu/"
			}, {
				"name": "Department of Teaching and Learning",
				"url": "http://ehe.osu.edu/teaching-and-learning/"
			}, {
				"name": "Department of Human Sciences",
				"url": "http://ehe.osu.edu/human-sciences/"
			}, {
				"name": "Department of Educational Sciences",
				"url": "http://ehe.osu.edu/human-sciences/"
			}]
		}, {
			"id": "21",
			"name": "Atwell Hall",
			"latitude": "39.9936196",
			"longitude": "-83.01875209",
			"address": "453 W 10th Ave",
			"buildingCode": "AH",
			"buildingNumber": "306",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=306&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Entire Building - Hosted by the OSU Medical Center"
			}],
			"departments": [{
				"name": "Health Sciences Administration ",
				"url": "https://hrs.osu.edu"
			}, {
				"name": "School of Health and Rehabilitation Sciences",
				"url": "https://hrs.osu.edu/"
			}]
		}, {
			"id": "23",
			"name": "Baker Hall",
			"latitude": "39.99640032",
			"longitude": "-83.01033479",
			"address": "93, 113, & 129 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "095",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=095&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": "Baker East & West"
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=1'>Buckeye Express</a></strong><br>Value-priced meals to go</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: B,G,01,02,03,04,"
			}],
			"departments": [{
				"name": "Baker Hall East Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/baker-hall-east"
			}, {
				"name": "Baker Hall West Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/baker-hall-west"
			}, {
				"name": "Disability Services ",
				"url": "http://slds.osu.edu/"
			}]
		}, {
			"id": "24",
			"name": "Baker Systems Engineering",
			"latitude": "40.00159622",
			"longitude": "-83.01591664",
			"address": "1971 Neil Ave",
			"buildingCode": "BE",
			"buildingNumber": "280",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=280&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Department of Integrated Systems Engineering",
				"url": "https://ise.osu.edu/"
			}]
		}, {
			"id": "25",
			"name": "Barrett House",
			"latitude": "40.00471762",
			"longitude": "-83.01101708",
			"address": "88 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "184",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=184&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,G,01,02,03,"
			}],
			"departments": [{
				"name": "Biological Sciences Scholars",
				"url": "https://honors-scholars.osu.edu/scholars/programs/biological-sciences"
			}, {
				"name": "Barrett House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/barrett-house"
			}]
		}, {
			"id": "27",
			"name": "Bevis Hall",
			"latitude": "40.00287251",
			"longitude": "-83.03811302",
			"address": "1080 Carmack Rd",
			"buildingCode": "BH",
			"buildingNumber": "307",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=307&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "International Programs in Agriculture",
				"url": "https://ipa.osu.edu/"
			}, {
				"name": "Department of Biomedical Engineering",
				"url": "https://bme.osu.edu/"
			}]
		}, {
			"id": "28",
			"name": "Biocontainment Laboratory",
			"latitude": "40.00437364",
			"longitude": "-83.03865088",
			"address": "2090 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "345",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=345&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "29",
			"name": "Parking Garage - Biological Science Building",
			"latitude": "39.99635088",
			"longitude": "-83.02005397",
			"address": "484 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "283",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=283&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage."
			}],
			"departments": []
		}, {
			"id": "30",
			"name": "Biological Science Building",
			"latitude": "39.99649622",
			"longitude": "-83.02007965",
			"address": "484 W 12th Ave",
			"buildingCode": "BI",
			"buildingNumber": "276",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=276&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,06,"
			}],
			"departments": [{
				"name": "Department of Molecular, Cellular, and Developmental Biology",
				"url": "https://mcdb.osu.edu/research/molecular-neurobiology"
			}, {
				"name": "Department of Molecular Genetics ",
				"url": "https://molgen.osu.edu/"
			}]
		}, {
			"id": "31",
			"name": "Biological Sciences Greenhouses",
			"latitude": "39.99671921",
			"longitude": "-83.01744542",
			"address": "332 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "010",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=010&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Biological Sciences Greenhouse",
				"url": "https://bioscigreenhouse.osu.edu/"
			}]
		}, {
			"id": "34",
			"name": "Blackwell Inn",
			"latitude": "40.0048292",
			"longitude": "-83.01660658",
			"address": "2110 Tuttle Park Pl",
			"buildingCode": null,
			"buildingNumber": "254",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=254&size=mobile&nodefault=1",
			"categories": [{
				"name": "Food",
				"info": "<p><strong><a href='http://www.theblackwell.com/restaurant/'>Bistro 2110</a></strong><br>A wide array of American, European  and Asian cuisine with fresh products and unique presentations.</p>"
			}, {
				"name": "Lodging",
				"info": "<a href='http://www.theblackwell.com/'>The Blackwell</a>"
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,05,06,07,08,"
			}],
			"departments": [{
				"name": "The Blackwell",
				"url": "https://www.theblackwell.com/"
			}]
		}, {
			"id": "35",
			"name": "Blankenship Hall",
			"latitude": "40.00231797",
			"longitude": "-83.03370875",
			"address": "901 Woody Hayes Dr",
			"buildingCode": null,
			"buildingNumber": "360",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=360&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Commencement and Official Events",
				"url": "http://commencement.osu.edu/"
			}, {
				"name": "Department of Public Safety ",
				"url": "https://dps.osu.edu/"
			}]
		}, {
			"id": "36",
			"name": "Bloch Cancer Survivors Plaza",
			"latitude": "40.00718474",
			"longitude": "-83.02268278",
			"address": "2180 Olentangy River Rd",
			"buildingCode": null,
			"buildingNumber": "315",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=315&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "Bloch Cancer Survivors Plaza"
			}],
			"departments": []
		}, {
			"id": "37",
			"name": "Bolz Hall",
			"latitude": "40.00310156",
			"longitude": "-83.01502321",
			"address": "2036 Neil Ave Mall",
			"buildingCode": "BO",
			"buildingNumber": "146",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=146&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,"
			}],
			"departments": [{
				"name": "Engineering Research Operations",
				"url": "https://engineering.osu.edu/research/services"
			}]
		}, {
			"id": "39",
			"name": "Bradley Hall",
			"latitude": "39.99656235",
			"longitude": "-83.01329387",
			"address": "221 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "097",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=097&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Bradley Hall",
				"url": "https://housing.osu.edu/roomsearch/bradley-hall"
			}]
		}, {
			"id": "40",
			"name": "Bricker Hall",
			"latitude": "40.00062997",
			"longitude": "-83.01338995",
			"address": "190 N Oval Mall",
			"buildingCode": "BK",
			"buildingNumber": "001",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=001&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "University Communications",
				"url": "http://ucom.osu.edu/"
			}, {
				"name": "Board of Trustees",
				"url": "http://trustees.osu.edu/"
			}, {
				"name": "Office of the President",
				"url": "http://president.osu.edu/index.php"
			}, {
				"name": "Office of Research",
				"url": "http://research.osu.edu/"
			}, {
				"name": "Office of Academic Affairs",
				"url": "http://oaa.osu.edu/"
			}, {
				"name": "Office of Business and Finance",
				"url": "https://busfin.osu.edu/"
			}, {
				"name": "Government Affairs",
				"url": "http://govaffairs.osu.edu/"
			}, {
				"name": "Office of Risk Management",
				"url": "https://busfin.osu.edu/university-business/risk-management"
			}, {
				"name": "Office of Outreach and Engagement",
				"url": "http://engage.osu.edu/"
			}, {
				"name": "Internal Audit",
				"url": "https://busfin.osu.edu/university-business/internal-audit"
			}]
		}, {
			"id": "42",
			"name": "Buckeye Village Community Center",
			"latitude": "40.0151828",
			"longitude": "-83.02576169",
			"address": "2724 Defiance Dr",
			"buildingCode": null,
			"buildingNumber": "800",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=800&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": []
		}, {
			"id": "43",
			"name": "Buckeye Village Administration",
			"latitude": "40.01582278",
			"longitude": "-83.02746635",
			"address": "2661 Defiance Dr",
			"buildingCode": null,
			"buildingNumber": "833",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=833&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "44",
			"name": "Buckeye Village Recreation Hall",
			"latitude": "40.01455568",
			"longitude": "-83.02637636",
			"address": "2704 Defiance Dr",
			"buildingCode": null,
			"buildingNumber": "834",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=834&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "45",
			"name": "Buckeye Village A - Cuyahoga Ct, 600-626",
			"latitude": "40.01759734",
			"longitude": "-83.02633345",
			"address": "600-626 Cuyahoga Ct",
			"buildingCode": null,
			"buildingNumber": "801",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=801&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "All Apartment Units"
			}],
			"departments": []
		}, {
			"id": "48",
			"name": "Caldwell Laboratory",
			"latitude": "40.00243311",
			"longitude": "-83.01503371",
			"address": "2024 Neil Ave",
			"buildingCode": "CL",
			"buildingNumber": "026",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=026&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": []
		}, {
			"id": "49",
			"name": "Campbell Hall",
			"latitude": "39.99775633",
			"longitude": "-83.01581751",
			"address": "1787 Neil Ave",
			"buildingCode": "CM",
			"buildingNumber": "018",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=018&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Interest",
				"info": "<a href='http://costume.osu.edu/'>Historic Costume and Textiles Collection</a> 2nd Floor"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "Historic Costume and Textiles Collection",
				"url": "http://costume.osu.edu/"
			}]
		}, {
			"id": "50",
			"name": "Canfield Hall",
			"latitude": "39.99600422",
			"longitude": "-83.01349155",
			"address": "236 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "098",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=098&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Canfield Hall Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/canfield-hall"
			}]
		}, {
			"id": "51",
			"name": "Celeste Laboratory of Chemistry",
			"latitude": "40.00269732",
			"longitude": "-83.01176721",
			"address": "120 W 18th Ave",
			"buildingCode": "CE",
			"buildingNumber": "371",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=371&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,"
			}],
			"departments": []
		}, {
			"id": "52",
			"name": "Enarson Classroom Building",
			"latitude": "40.00216943",
			"longitude": "-83.01683347",
			"address": "2009 Millikin Rd",
			"buildingCode": "EC",
			"buildingNumber": "072",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=072&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Facilities Operation and Development",
				"url": "https://fod.osu.edu/"
			}, {
				"name": "Office of International Affairs",
				"url": "https://oia.osu.edu/"
			}]
		}, {
			"id": "53",
			"name": "Central Service Building",
			"latitude": "40.00180119",
			"longitude": "-83.01661558",
			"address": "2003 Millikin Rd",
			"buildingCode": null,
			"buildingNumber": "077",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=077&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Utilities",
				"url": "https://fod.osu.edu/utilities/"
			}, {
				"name": "Facilities Operations and Development",
				"url": "https://fod.osu.edu/"
			}]
		}, {
			"id": "55",
			"name": "Child Care Center",
			"latitude": "40.01656862",
			"longitude": "-83.02832247",
			"address": "725 Ackerman Rd",
			"buildingCode": null,
			"buildingNumber": "385",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=385&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Child Care Program",
				"url": "https://hr.osu.edu/child-care-program/"
			}]
		}, {
			"id": "57",
			"name": "Cockins Hall",
			"latitude": "40.00124804",
			"longitude": "-83.01501866",
			"address": "1958 Neil Ave",
			"buildingCode": "CH",
			"buildingNumber": "063",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=063&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Department of Statistics",
				"url": "https://stat.osu.edu/"
			}]
		}, {
			"id": "58",
			"name": "Coffey Rd Sports Center",
			"latitude": "40.00173905",
			"longitude": "-83.02595904",
			"address": "1966 Coffey Rd",
			"buildingCode": null,
			"buildingNumber": "255",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=255&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Recreational Sports",
				"url": "https://recsports.osu.edu/facilities/outdoor-facilities/coffey-road-park"
			}]
		}, {
			"id": "59",
			"name": "Comprehensive Cancer Center",
			"latitude": "39.99658566",
			"longitude": "-83.01829262",
			"address": "410 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "363",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=363&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "60",
			"name": "Converse Hall",
			"latitude": "40.00509444",
			"longitude": "-83.01748953",
			"address": "2121 Tuttle Park Pl",
			"buildingCode": "CV",
			"buildingNumber": "056",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=056&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": [{
				"name": "Military Science",
				"url": "http://arotc.osu.edu/"
			}, {
				"name": "Air Force Aerospace Studies",
				"url": "http://afrotc.osu.edu/"
			}, {
				"name": "Naval Science",
				"url": "http://nrotc.osu.edu/"
			}]
		}, {
			"id": "63",
			"name": "Cryogenic Laboratory",
			"latitude": "40.00009957",
			"longitude": "-83.0430484",
			"address": "1286 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "140",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=140&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "64",
			"name": "Cunz Hall",
			"latitude": "39.99865913",
			"longitude": "-83.01703571",
			"address": "1841 Neil Ave",
			"buildingCode": "CZ",
			"buildingNumber": "293",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=293&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Building Under Construction"
			}],
			"departments": [{
				"name": "College of Public Health",
				"url": "http://cph.osu.edu/"
			}, {
				"name": "Biostatistics Program",
				"url": "https://cph.osu.edu/bio"
			}]
		}, {
			"id": "66",
			"name": "Waterman - Dairy Calf Barn",
			"latitude": "40.00953008",
			"longitude": "-83.04161454",
			"address": "2449 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "316",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=316&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "67",
			"name": "Waterman - Dairy Loose Housing Barn",
			"latitude": "40.00932793",
			"longitude": "-83.04110062",
			"address": "2453 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "008",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=008&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "68",
			"name": "Waterman - Dairy Research Barn",
			"latitude": "40.01031704",
			"longitude": "-83.04100805",
			"address": "2491 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "023",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=023&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "69",
			"name": "Bill Davis Baseball Stadium",
			"latitude": "40.00938241",
			"longitude": "-83.02649134",
			"address": "650 Borror Dr",
			"buildingCode": null,
			"buildingNumber": "228",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=228&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "70",
			"name": "Davis Heart and Lung Research Institute",
			"latitude": "39.99567514",
			"longitude": "-83.01924594",
			"address": "473 W 12th Ave",
			"buildingCode": "HR",
			"buildingNumber": "113",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=113&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": [{
				"name": "Heart and Lung Research Institute",
				"url": "https://wexnermedical.osu.edu/heart-vascular/heart-lung"
			}, {
				"name": "Internal Medicine",
				"url": "https://wexnermedical.osu.edu/departments/internal-medicine"
			}]
		}, {
			"id": "71",
			"name": "Davis Medical Research Center",
			"latitude": "39.99258136",
			"longitude": "-83.02013659",
			"address": "480 Medical Center Dr",
			"buildingCode": "DV",
			"buildingNumber": "382",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=382&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "72",
			"name": "Denney Hall",
			"latitude": "40.00130993",
			"longitude": "-83.01252836",
			"address": "164 Annie & John Glenn Ave",
			"buildingCode": "DE",
			"buildingNumber": "030",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=030&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 145A, contact KC Kannen at 614-292-8252"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Department of English",
				"url": "https://english.osu.edu/"
			}, {
				"name": "Arts and Sciences Advising and Academic Services",
				"url": "https://artsandsciences.osu.edu/academics/current-students/advising"
			}, {
				"name": "Arts and Sciences Recruitment and Diversity Services",
				"url": "https://artsandsciences.osu.edu/about/college/contacts/recruitment-diversity"
			}, {
				"name": "Arts and Sciences Career Services",
				"url": "https://asccareerservices.osu.edu/"
			}]
		}, {
			"id": "73",
			"name": "Derby Hall",
			"latitude": "40.00075608",
			"longitude": "-83.01242693",
			"address": "154 N Oval Mall",
			"buildingCode": "DB",
			"buildingNumber": "025",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=025&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Geography",
				"url": "https://geography.osu.edu/"
			}, {
				"name": "Political Science",
				"url": "https://polisci.osu.edu/"
			}, {
				"name": "Arts and Sciences Communications Services",
				"url": "https://artsandsciences.osu.edu/about/college/contacts/marcomm"
			}, {
				"name": "Center for Urban and Regional Analysis",
				"url": "https://cura.osu.edu/"
			}]
		}, {
			"id": "74",
			"name": "Doan Hall",
			"latitude": "39.99561579",
			"longitude": "-83.01762976",
			"address": "410 W 10th Ave",
			"buildingCode": "DN",
			"buildingNumber": "089",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=089&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 718, call 293-8910"
			}],
			"departments": [{
				"name": "Department of Anesthesiology",
				"url": "https://wexnermedical.osu.edu/departments/anesthesiology"
			}, {
				"name": "Department of Neurological Surgery ",
				"url": "http://neurosurgery.osu.edu/"
			}, {
				"name": "Obstetrics and Gynecology",
				"url": "https://wexnermedical.osu.edu/obstetrics-gynecology"
			}, {
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/locations-and-parking/university-hospital"
			}, {
				"name": "Infectious Diseases",
				"url": "http://internalmedicine.osu.edu/infectiousdiseases/"
			}]
		}, {
			"id": "75",
			"name": "Dodd Hall",
			"latitude": "39.99285523",
			"longitude": "-83.01984032",
			"address": "480 Medical Center Dr",
			"buildingCode": "DO",
			"buildingNumber": "171",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=171&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Lactation Room",
				"info": "Green Therapy Room, call 293-8618"
			}],
			"departments": [{
				"name": "Department of Orthopaedics",
				"url": "https://wexnermedical.osu.edu/departments/orthopaedics"
			}, {
				"name": "Department of Physical Medicine and Rehabilitation",
				"url": "https://wexnermedical.osu.edu/neurological-institute/departments-and-centers/departments/department-physical-medicine-rehabilitation"
			}, {
				"name": "Department of Obstetrics and Gynecology",
				"url": "https://wexnermedical.osu.edu/departments/obstetrics-gynecology"
			}, {
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "76",
			"name": "Transmitter - WOSU",
			"latitude": "40.01736144",
			"longitude": "-83.01991447",
			"address": "350 W Dodridge St",
			"buildingCode": "VS",
			"buildingNumber": "984",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=984&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "77",
			"name": "Drackett Tower",
			"latitude": "40.00553097",
			"longitude": "-83.01355031",
			"address": "191 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "189",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=189&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,06,07,08,09,10,11,12,"
			}],
			"departments": [{
				"name": "Drackett Tower Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/drackett-tower"
			}, {
				"name": "Student Life Student Advocacy Center ",
				"url": "http://advocacy.osu.edu/"
			}]
		}, {
			"id": "78",
			"name": "Drake Performance and Event Center",
			"latitude": "39.99928865",
			"longitude": "-83.02314401",
			"address": "1849 Cannon Dr",
			"buildingCode": "DR",
			"buildingNumber": "296",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=296&size=mobile&nodefault=1",
			"categories": [{
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=13'>ViewPoint Bistro</a></strong><br>Operated by hospitality management students in the College of Education and Human Ecology, the ViewPoint presents an eclectic, reasonably priced menu under the direction of Chef James Garrett.<br><br><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=20'>The P.A.D.</a></strong><br>Pizza and more. Eat in and delivery.</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "The Ohio State Crew Club",
				"url": "http://osucrew.org/"
			}, {
				"name": "Department of Theatre",
				"url": "https://theatre.osu.edu/"
			}, {
				"name": "Drake Performance and Event Center ",
				"url": "https://drake.osu.edu/page/home/"
			}]
		}, {
			"id": "79",
			"name": "Dreese Laboratories",
			"latitude": "40.00222129",
			"longitude": "-83.01599036",
			"address": "2015 Neil Ave",
			"buildingCode": "DL",
			"buildingNumber": "279",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=279&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,05,06,07,08,"
			}],
			"departments": [{
				"name": "Department of Electric and Computer Engineering",
				"url": "https://ece.osu.edu/"
			}, {
				"name": "Department of Computer Science and Engineering ",
				"url": "https://cse.osu.edu/"
			}]
		}, {
			"id": "80",
			"name": "Drinko Hall",
			"latitude": "39.99610527",
			"longitude": "-83.00827268",
			"address": "55 W 12th Ave",
			"buildingCode": "DI",
			"buildingNumber": "049",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=049&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://moritzlaw.osu.edu/library/index.html'>Law Library</a><br>Drinko Hall<br>55 West 12th Avenue<br>292-6691"
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=6'>The Campus Grind</a></strong><br>Coffee, bagels, soup, salads and sandwiches</p>"
			}],
			"departments": [{
				"name": "Michael E Moritz College of Law",
				"url": "http://moritzlaw.osu.edu/"
			}, {
				"name": "Law Library",
				"url": "http://moritzlaw.osu.edu/lib/"
			}, {
				"name": "The Campus Grind",
				"url": "https://dining.osu.edu/dininglocations/the-campus-grind/"
			}]
		}, {
			"id": "81",
			"name": "Kinnear Rd, 1260",
			"latitude": "40.00004432",
			"longitude": "-83.04208351",
			"address": "1260 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "128",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=128&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "82",
			"name": "Dulles Hall",
			"latitude": "40.00110502",
			"longitude": "-83.01440883",
			"address": "230 Annie & John Glenn Ave",
			"buildingCode": "DU",
			"buildingNumber": "337",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=337&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Department of History",
				"url": "https://history.osu.edu/"
			}, {
				"name": "Melton Center for Jewish Studies",
				"url": "https://meltoncenter.osu.edu/"
			}]
		}, {
			"id": "83",
			"name": "Edison Joining Technology Center",
			"latitude": "40.00625156",
			"longitude": "-83.04297216",
			"address": "1248 Arthur Adams Dr",
			"buildingCode": "ED",
			"buildingNumber": "057",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=057&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "84",
			"name": "Eighteenth Ave, 209 W",
			"latitude": "40.00154113",
			"longitude": "-83.01416752",
			"address": "209 W 18th Ave",
			"buildingCode": "EA",
			"buildingNumber": "004",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=004&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "General purpose lecture halls",
				"url": ""
			}]
		}, {
			"id": "86",
			"name": "ElectroScience Laboratory",
			"latitude": "39.99928514",
			"longitude": "-83.04512715",
			"address": "1320 Kinnear Rd",
			"buildingCode": "ES",
			"buildingNumber": "009",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=009&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "ElectroScience Laboratory",
				"url": "https://electroscience.osu.edu/"
			}]
		}, {
			"id": "87",
			"name": "Eleventh Ave, 33 W",
			"latitude": "39.99501532",
			"longitude": "-83.00806834",
			"address": "33 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "193",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=193&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "88",
			"name": "Eleventh Ave, 45 W",
			"latitude": "39.99512087",
			"longitude": "-83.00858569",
			"address": "45 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "964",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=964&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "89",
			"name": "Eleventh Ave, 53 W",
			"latitude": "39.99511373",
			"longitude": "-83.00872633",
			"address": "53 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "902",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=902&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Office of Service Learning",
				"url": "http://u.osu.edu/servicelearning/"
			}]
		}, {
			"id": "90",
			"name": "Eleventh Ave, 235-243 W",
			"latitude": "39.99541367",
			"longitude": "-83.01378343",
			"address": "235-243 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "177",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=177&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "91",
			"name": "Adriatico's",
			"latitude": "39.99541074",
			"longitude": "-83.01404793",
			"address": "265 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "909",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=909&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Adriatico's Pizza",
				"url": "https://adriaticososu.com/"
			}]
		}, {
			"id": "92",
			"name": "Hale Hall",
			"latitude": "39.99701838",
			"longitude": "-83.01176493",
			"address": "154 W 12th Ave",
			"buildingCode": "FW",
			"buildingNumber": "085",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=085&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Office of Diversity and Inclusion",
				"url": "https://odi.osu.edu/"
			}, {
				"name": "Frank W. Hale, Jr. Black Cultural Center",
				"url": "https://odi.osu.edu/hale-black-cultural-center/"
			}, {
				"name": "The Women's Place ",
				"url": "https://womensplace.osu.edu/"
			}, {
				"name": "ADA Coordinator's Office",
				"url": "https://ada.osu.edu/"
			}]
		}, {
			"id": "93",
			"name": "Evans Hall",
			"latitude": "39.99105724",
			"longitude": "-83.02004795",
			"address": "520 King Ave",
			"buildingCode": null,
			"buildingNumber": "995",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=995&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "94",
			"name": "Evans Laboratory",
			"latitude": "40.00266349",
			"longitude": "-83.01109553",
			"address": "88 W 18th Ave",
			"buildingCode": "EL",
			"buildingNumber": "150",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=150&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": []
		}, {
			"id": "95",
			"name": "Faculty Club",
			"latitude": "39.99825997",
			"longitude": "-83.01269447",
			"address": "181 S Oval Dr",
			"buildingCode": null,
			"buildingNumber": "028",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=028&size=mobile&nodefault=1",
			"categories": [{
				"name": "Art",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Faculty Club",
				"url": "http://www.ohio-statefacultyclub.com/"
			}]
		}, {
			"id": "96",
			"name": "Fawcett Center for Tomorrow",
			"latitude": "40.01071684",
			"longitude": "-83.02088082",
			"address": "2400 Olentangy River Rd",
			"buildingCode": "CT",
			"buildingNumber": "284",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=284&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "WOSU",
				"url": "https://www.wosu.org/"
			}, {
				"name": "Fawcett Center",
				"url": "https://www.fawcettcenter.com/page/home/"
			}, {
				"name": "Athletics",
				"url": "http://ohiostatebuckeyes.com"
			}]
		}, {
			"id": "97",
			"name": "Fechko Alumnae Scholarship House",
			"latitude": "39.99582458",
			"longitude": "-83.01325237",
			"address": "220-222 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "040",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=040&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "Fechko House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/fechko-house"
			}]
		}, {
			"id": "98",
			"name": "Fisher Hall",
			"latitude": "40.0049168",
			"longitude": "-83.01604067",
			"address": "2100 Neil Ave",
			"buildingCode": "FI",
			"buildingNumber": "249",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=249&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Fisher College of Business",
				"url": "https://fisher.osu.edu/"
			}, {
				"name": "Department of Accounting & Management Information Systems",
				"url": "https://fisher.osu.edu/academic-departments/amis"
			}, {
				"name": "Department of Finance",
				"url": "https://fisher.osu.edu/academic-departments/department-finance"
			}, {
				"name": "Department of Management and Human Resources",
				"url": "https://fisher.osu.edu/academic-departments/management-human-resources"
			}, {
				"name": "Department of Management Sciences",
				"url": "https://fisher.osu.edu/academic-departments/management-sciences"
			}, {
				"name": "Department of Marketing and Logistics",
				"url": "https://fisher.osu.edu/academic-departments/marketing-logistics"
			}, {
				"name": "Executive Education ",
				"url": "https://fisher.osu.edu/executive-education"
			}]
		}, {
			"id": "99",
			"name": "Fontana Laboratories",
			"latitude": "40.00331012",
			"longitude": "-83.01190656",
			"address": "116 W 19th Ave",
			"buildingCode": "FL",
			"buildingNumber": "151",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=151&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,03,04,"
			}],
			"departments": []
		}, {
			"id": "100",
			"name": "French Field House",
			"latitude": "40.00538261",
			"longitude": "-83.02040663",
			"address": "460 Woody Hayes Dr",
			"buildingCode": null,
			"buildingNumber": "086",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=086&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "101",
			"name": "Fry Hall",
			"latitude": "39.99465239",
			"longitude": "-83.01635848",
			"address": "338 W 10th Ave",
			"buildingCode": "FR",
			"buildingNumber": "059",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=059&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,"
			}],
			"departments": [{
				"name": "College of Optometry",
				"url": "https://optometry.osu.edu/"
			}]
		}, {
			"id": "102",
			"name": "Galbreath Equine Center",
			"latitude": "40.00119862",
			"longitude": "-83.02869861",
			"address": "685 Vernon Tharp St",
			"buildingCode": null,
			"buildingNumber": "282",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=282&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Galbreath Equine Center",
				"url": "https://vet.osu.edu/vmc/equine"
			}]
		}, {
			"id": "105",
			"name": "Herrick Dr, 393",
			"latitude": "39.99705209",
			"longitude": "-83.01769688",
			"address": "393 Herrick Dr",
			"buildingCode": null,
			"buildingNumber": "132",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=132&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "106",
			"name": "Gerlach Hall",
			"latitude": "40.00492136",
			"longitude": "-83.01489497",
			"address": "2108 Neil Ave",
			"buildingCode": "GE",
			"buildingNumber": "250",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=250&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Entire Building -- Hosted by the College of Business"
			}],
			"departments": []
		}, {
			"id": "107",
			"name": "German House",
			"latitude": "39.99522027",
			"longitude": "-83.01112952",
			"address": "141 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "965",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=965&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "German House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/german-house"
			}]
		}, {
			"id": "108",
			"name": "Goss Laboratory",
			"latitude": "39.99999697",
			"longitude": "-83.02755092",
			"address": "1925 Coffey Rd",
			"buildingCode": "GL",
			"buildingNumber": "180",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=180&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": []
		}, {
			"id": "109",
			"name": "Graves Hall",
			"latitude": "39.99386197",
			"longitude": "-83.01585119",
			"address": "333 W 10th Ave",
			"buildingCode": "GR",
			"buildingNumber": "277",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=277&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": " Entire Building - Hosted by the OSU Medical Center"
			}],
			"departments": [{
				"name": "College of Medicine ",
				"url": "https://medicine.osu.edu/Pages/default.aspx"
			}, {
				"name": "Department of Neuroscience",
				"url": "https://wexnermedical.osu.edu/neurological-institute/departments-and-centers/departments/department-of-neuroscience"
			}]
		}, {
			"id": "111",
			"name": "Hagerty Hall",
			"latitude": "39.99860531",
			"longitude": "-83.01030783",
			"address": "1775 College Rd",
			"buildingCode": "HH",
			"buildingNumber": "037",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=037&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,"
			}],
			"departments": [{
				"name": "Comparative Studies",
				"url": "https://comparativestudies.osu.edu/"
			}, {
				"name": "Department of East Asian Languages and Literatures",
				"url": "https://deall.osu.edu/"
			}, {
				"name": "Center for Languages, Literatures and Cultures",
				"url": "http://cllc.osu.edu/"
			}, {
				"name": " Department of French and Italian",
				"url": "https://frit.osu.edu/"
			}, {
				"name": "Department of Germanic Languages and Literatures",
				"url": "https://germanic.osu.edu/"
			}, {
				"name": "Near Eastern Languages and Cultures",
				"url": "http://nelc.osu.edu/"
			}, {
				"name": "Department of Slavic and East European Languages and Literatures",
				"url": "https://slavic.osu.edu/"
			}, {
				"name": "Spanish and Portuguese",
				"url": "http://sppo.osu.edu/"
			}, {
				"name": "Center for Medieval and Renaissance Studies (CMRS)",
				"url": "https://cmrs.osu.edu/"
			}, {
				"name": "Film Studies",
				"url": "https://film-studies.osu.edu/"
			}, {
				"name": "Diversity and Identity Studies Collective at OSU (DISCO)",
				"url": "http://disco.osu.edu/"
			}, {
				"name": "Department of Spanish and Portuguese",
				"url": "https://sppo.osu.edu/"
			}, {
				"name": "Humanities Institute",
				"url": "https://huminst.osu.edu/"
			}, {
				"name": "Crane café",
				"url": "https://dining.osu.edu/dininglocations/crane-cafe/"
			}]
		}, {
			"id": "113",
			"name": "Halloran House",
			"latitude": "40.00457447",
			"longitude": "-83.0103805",
			"address": "60 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "185",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=185&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,G,01,02,03,"
			}],
			"departments": [{
				"name": "Halloran House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/halloran-house"
			}]
		}, {
			"id": "114",
			"name": "Hamilton Hall",
			"latitude": "39.99500717",
			"longitude": "-83.0151473",
			"address": "1645 Neil Ave",
			"buildingCode": "HM",
			"buildingNumber": "038",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=038&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Entire Building - Hosted by the OSU Medical Center"
			}],
			"departments": [{
				"name": "Pathology",
				"url": "https://pathology.osu.edu/ext/default.html"
			}, {
				"name": "Physiology and Cell Biology",
				"url": "https://medicine.osu.edu/physiology/Pages/index.aspx"
			}]
		}, {
			"id": "115",
			"name": "Hanley Alumnae Scholarship House",
			"latitude": "39.99409215",
			"longitude": "-83.01312409",
			"address": "225 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "864",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=864&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Hanley House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/hanley-house"
			}]
		}, {
			"id": "117",
			"name": "Haverfield House",
			"latitude": "40.00410134",
			"longitude": "-83.01163725",
			"address": "112 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "182",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=182&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,G,01,02,03,"
			}],
			"departments": [{
				"name": "Haverfield House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/haverfield-house"
			}]
		}, {
			"id": "118",
			"name": "Hayes Hall",
			"latitude": "40.00053815",
			"longitude": "-83.01116118",
			"address": "108 N Oval Mall",
			"buildingCode": "HA",
			"buildingNumber": "039",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=039&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Industrial Interior and Visual Communication Design",
				"url": "https://design.osu.edu/"
			}]
		}, {
			"id": "119",
			"name": "Heffner Wetland Research and Education",
			"latitude": "40.01899584",
			"longitude": "-83.01961321",
			"address": "352 W Dodridge St",
			"buildingCode": "HW",
			"buildingNumber": "222",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=222&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "120",
			"name": "Waterman - Heifer Barn",
			"latitude": "40.01016094",
			"longitude": "-83.04150642",
			"address": "2467 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "221",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=221&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "122",
			"name": "Hitchcock Hall",
			"latitude": "40.00357404",
			"longitude": "-83.01528456",
			"address": "2070 Neil Ave",
			"buildingCode": "HI",
			"buildingNumber": "274",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=274&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "College of Engineering",
				"url": "https://engineering.osu.edu/"
			}, {
				"name": "Department of Civil, Environmental and Geodetic Engineering",
				"url": "https://ceg.osu.edu/"
			}]
		}, {
			"id": "123",
			"name": "Hopkins Hall",
			"latitude": "40.00087349",
			"longitude": "-83.01154836",
			"address": "128 N Oval Mall",
			"buildingCode": "HC",
			"buildingNumber": "149",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=149&size=mobile&nodefault=1",
			"categories": [{
				"name": "Art",
				"info": ""
			}, {
				"name": "Computing",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/libinfo/BML.html'>Baggs Memorial Library</a><br>052 Hopkins Hall<br>128 North Oval Mall<br>292-5072"
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,"
			}],
			"departments": [{
				"name": "Department of Art ",
				"url": "https://art.osu.edu/"
			}, {
				"name": "Hopkins Hall Gallery",
				"url": "https://hhg.osu.edu/"
			}]
		}, {
			"id": "125",
			"name": "Houck House",
			"latitude": "40.00521286",
			"longitude": "-83.01110256",
			"address": "61 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "194",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=194&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Houck House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/houck-house"
			}]
		}, {
			"id": "126",
			"name": "Howlett Greenhouses",
			"latitude": "40.00210284",
			"longitude": "-83.02832483",
			"address": "680 Vernon Tharp St",
			"buildingCode": "HG",
			"buildingNumber": "297",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=297&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Horticulture and Crop Science",
				"url": "http://hcs.osu.edu/"
			}]
		}, {
			"id": "127",
			"name": "Howlett Hall",
			"latitude": "40.00272238",
			"longitude": "-83.02809523",
			"address": "2001 Fyffe Ct",
			"buildingCode": "HT",
			"buildingNumber": "295",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=295&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "Learning Gardens and Chadwick Arboretum"
			}, {
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": []
		}, {
			"id": "128",
			"name": "Hughes Hall",
			"latitude": "40.00087263",
			"longitude": "-83.01078816",
			"address": "1899 College Rd",
			"buildingCode": "HU",
			"buildingNumber": "042",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=042&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,"
			}],
			"departments": []
		}, {
			"id": "129",
			"name": "Ice Rink",
			"latitude": "40.0052673",
			"longitude": "-83.01826165",
			"address": "390 Woody Hayes Dr",
			"buildingCode": "IR",
			"buildingNumber": "229",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=229&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "130",
			"name": "Independence Hall",
			"latitude": "40.00035766",
			"longitude": "-83.01575914",
			"address": "1923 Neil Ave Mall",
			"buildingCode": "IH",
			"buildingNumber": "338",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=338&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "131",
			"name": "Brain and Spine Hospital",
			"latitude": "39.99561053",
			"longitude": "-83.01644197",
			"address": "300 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "372",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=372&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "132",
			"name": "Jennings Hall",
			"latitude": "39.99673985",
			"longitude": "-83.0156515",
			"address": "1735 Neil Ave",
			"buildingCode": "JE",
			"buildingNumber": "014",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=014&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,01,02,"
			}],
			"departments": [{
				"name": "Center for Life Sciences Education (Biology)",
				"url": "https://clse.osu.edu/"
			}, {
				"name": "Mathematical Biosciences Institute (MBI)",
				"url": "http://mbi.osu.edu/"
			}]
		}, {
			"id": "133",
			"name": "Jesse Owens Memorial Stadium",
			"latitude": "40.01232112",
			"longitude": "-83.02802127",
			"address": "2450 Fred Taylor Dr",
			"buildingCode": null,
			"buildingNumber": "092",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=092&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "134",
			"name": "Jesse Owens Recreation Center North",
			"latitude": "40.00592877",
			"longitude": "-83.01503422",
			"address": "2151 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "347",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=347&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "http://recsports.osu.edu/facilities/jesse-owens-north-jon-recreation-center"
			}]
		}, {
			"id": "135",
			"name": "Jesse Owens Recreation Center South",
			"latitude": "39.99501105",
			"longitude": "-83.01186051",
			"address": "175 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "348",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=348&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "https://recsports.osu.edu/facilities/jesse-owens-south-jos-recreation-center"
			}]
		}, {
			"id": "136",
			"name": "Jesse Owens Tennis Center West",
			"latitude": "40.00157679",
			"longitude": "-83.0357108",
			"address": "1031 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "349",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=349&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "http://recsports.osu.edu/facilities/jesse-owens-west-tennis-center-jowtc"
			}]
		}, {
			"id": "138",
			"name": "Jones Tower",
			"latitude": "40.00534754",
			"longitude": "-83.01205943",
			"address": "123 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "267",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=267&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,05,06,07,08,09,10,11,12,13,"
			}],
			"departments": [{
				"name": "Jones Tower Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/jones-tower"
			}]
		}, {
			"id": "139",
			"name": "Journalism Building",
			"latitude": "40.00199533",
			"longitude": "-83.01504486",
			"address": "242 W 18th Ave",
			"buildingCode": "JR",
			"buildingNumber": "046",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=046&size=mobile&nodefault=1",
			"categories": [{
				"name": "Post Office",
				"info": ""
			}, {
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "Post Office",
				"url": "https://tools.usps.com/go/POLocatorDetailsAction!input.action?&radius=20&locationType=po&locationTypeQ=po&locationID=1385508&utm_source=google-my-business-url&utm_medium=search&utm_campaign=yext"
			}, {
				"name": "Arts and Sciences Business Services Center",
				"url": "https://ascbsc.osu.edu/"
			}, {
				"name": "The Lantern",
				"url": "https://www.thelantern.com/"
			}]
		}, {
			"id": "140",
			"name": "Kennedy Commons",
			"latitude": "39.99659471",
			"longitude": "-83.01398858",
			"address": "251 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "105",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=105&size=mobile&nodefault=1",
			"categories": [{
				"name": "Food",
				"info": "<p><strong>Cafeteria Dining</strong><br>Traditional cafeteria-style dining facilities.<br><br><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=7'>Sprouts Cafe</a></strong><br>Vegetarian, vegan and gluten free products.</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Traditions at Kennedy ",
				"url": "https://dining.osu.edu/dininglocations/traditions-dining/"
			}, {
				"name": "12th Avenue Bread Company ",
				"url": "https://dining.osu.edu/dininglocations/12th-avenue-bread-company/"
			}]
		}, {
			"id": "141",
			"name": "Kenny Rd, 1900",
			"latitude": "39.99840704",
			"longitude": "-83.03434362",
			"address": "1900 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "232",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=232&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Center on Education and Training for Employment (CETE)",
				"url": ""
			}, {
				"name": "Center for Special Needs Population (CSNP)",
				"url": "https://cete.osu.edu/"
			}]
		}, {
			"id": "142",
			"name": "Metro High School",
			"latitude": "39.99877781",
			"longitude": "-83.03557316",
			"address": "1929 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "943",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=943&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "144",
			"name": "Center for Integrative Medicine",
			"latitude": "40.00031545",
			"longitude": "-83.03421571",
			"address": "2000-2002 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "213",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=213&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Ohio State Integrative Medicine ",
				"url": "https://wexnermedical.osu.edu/integrative-complementary-medicine"
			}]
		}, {
			"id": "145",
			"name": "Kenny Rd, 2006-2030",
			"latitude": "40.00031651",
			"longitude": "-83.0332809",
			"address": "2006-2030 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "214",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=214&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "146",
			"name": "Kinnear Rd, 1314",
			"latitude": "39.99867223",
			"longitude": "-83.04346235",
			"address": "1314 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "126",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=126&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Environmental Health and Safety",
				"url": "https://ehs.osu.edu/"
			}]
		}, {
			"id": "148",
			"name": "Kinnear Rd Center B",
			"latitude": "39.99662978",
			"longitude": "-83.03828417",
			"address": "1121 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "365",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=365&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "149",
			"name": "Kinnear Rd Center C",
			"latitude": "39.99664155",
			"longitude": "-83.03747109",
			"address": "1121 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "366",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=366&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "150",
			"name": "Kinnear Rd Center D",
			"latitude": "39.9972941",
			"longitude": "-83.03788146",
			"address": "1099 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "367",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=367&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Office of the Chief Information Officer",
				"url": "http://www.cio.osu.edu/"
			}]
		}, {
			"id": "151",
			"name": "Kinnear Rd Center E",
			"latitude": "39.99651146",
			"longitude": "-83.03787626",
			"address": "1121 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "368",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=368&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "153",
			"name": "Transplant Services at Kinnear Rd, 770",
			"latitude": "39.99855685",
			"longitude": "-83.02923736",
			"address": "770 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "966",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=966&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "155",
			"name": "Kinnear Rd, 930",
			"latitude": "39.99827884",
			"longitude": "-83.03277791",
			"address": "930 Kinnear Rd",
			"buildingCode": "CA",
			"buildingNumber": "227",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=227&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Center for Automotive Research",
				"url": "https://car.osu.edu/"
			}]
		}, {
			"id": "156",
			"name": "Kinnear Rd, 960",
			"latitude": "39.99856903",
			"longitude": "-83.03367737",
			"address": "960 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "931",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=931&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "157",
			"name": "Kinnear Rd, 1100",
			"latitude": "39.99874651",
			"longitude": "-83.03782313",
			"address": "1100 Kinnear Rd",
			"buildingCode": "KI",
			"buildingNumber": "373",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=373&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Trademark Licensing Service",
				"url": "https://trademarklicensing.osu.edu/page/home"
			}]
		}, {
			"id": "158",
			"name": "Kinnear Rd, 1212-1218",
			"latitude": "39.99923032",
			"longitude": "-83.04029375",
			"address": "1212-1218 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "378",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=378&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "159",
			"name": "Kinnear Rd, 1224",
			"latitude": "39.99990471",
			"longitude": "-83.0400604",
			"address": "1224 Kinnear Rd",
			"buildingCode": "KR",
			"buildingNumber": "374",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=374&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "160",
			"name": "Kinnear Rd, 1275-1305",
			"latitude": "39.99731478",
			"longitude": "-83.04246221",
			"address": "1275 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "395",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=395&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Science and Technology Campus Corporation",
				"url": "http://www.stcc.org/"
			}]
		}, {
			"id": "161",
			"name": "Kinnear Rd, 1315",
			"latitude": "39.9971129",
			"longitude": "-83.04400189",
			"address": "1315 Kinnear Rd",
			"buildingCode": "MB",
			"buildingNumber": "951",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=951&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Ohio Biological Survey",
				"url": "http://www.ohiobiologicalsurvey.org/"
			}, {
				"name": "Museum of Biological Diversity",
				"url": "https://mbd.osu.edu/"
			}]
		}, {
			"id": "162",
			"name": "Knowlton Hall",
			"latitude": "40.00359907",
			"longitude": "-83.01678866",
			"address": "275 W Woodruff Ave",
			"buildingCode": "KN",
			"buildingNumber": "017",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=017&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/architecture/'>Architecture Library</a><br>275 West Woodruff Avenue<br>292-4192"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Austin E Knowlton School of Architecture",
				"url": "https://knowlton.osu.edu/"
			}, {
				"name": "Architecture Library",
				"url": "https://library.osu.edu/locations/architecture"
			}, {
				"name": "ksa Café",
				"url": "https://dining.osu.edu/dininglocations/ksa-cafe/"
			}]
		}, {
			"id": "163",
			"name": "Nineteenth Ave, 140 W",
			"latitude": "40.00338721",
			"longitude": "-83.01242846",
			"address": "140 W 19th Ave",
			"buildingCode": "KL",
			"buildingNumber": "145",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=145&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,"
			}],
			"departments": []
		}, {
			"id": "164",
			"name": "Kottman Hall",
			"latitude": "40.00265631",
			"longitude": "-83.02684494",
			"address": "2021 Coffey Rd",
			"buildingCode": "KH",
			"buildingNumber": "340",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=340&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "School of Environment and Natural Resources",
				"url": "https://senr.osu.edu/"
			}, {
				"name": "Department of Horticulture and Crop Science",
				"url": "https://hcs.osu.edu/"
			}, {
				"name": "Department of Plant Pathology",
				"url": "https://plantpath.osu.edu/"
			}, {
				"name": "Department of Entomology",
				"url": "https://entomology.osu.edu/"
			}]
		}, {
			"id": "165",
			"name": "Kuhn Honors and Scholars House",
			"latitude": "39.99733634",
			"longitude": "-83.01337357",
			"address": "220 W 12th Ave",
			"buildingCode": "HN",
			"buildingNumber": "959",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=959&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "169",
			"name": "Lane Ave, 121 W",
			"latitude": "40.00591277",
			"longitude": "-83.01261716",
			"address": "121 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "915",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=915&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "170",
			"name": "Lane Ave, 127 W",
			"latitude": "40.00591983",
			"longitude": "-83.0127774",
			"address": "127 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "917",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=917&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "175",
			"name": "Lazenby Hall",
			"latitude": "39.99857556",
			"longitude": "-83.01571289",
			"address": "1827 Neil Ave Mall",
			"buildingCode": "LZ",
			"buildingNumber": "041",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=041&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,"
			}],
			"departments": []
		}, {
			"id": "177",
			"name": "Library Book Depository",
			"latitude": "40.01532159",
			"longitude": "-83.03620333",
			"address": "2700 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "350",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=350&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/archives/'>Archives</a><br>109 Book Depository<br>2700 Kenny Road<br>292-2409"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "University Archives",
				"url": "https://library.osu.edu/archives"
			}]
		}, {
			"id": "178",
			"name": "Thompson Library",
			"latitude": "39.99925188",
			"longitude": "-83.01488152",
			"address": "1858 Neil Ave Mall",
			"buildingCode": "LI",
			"buildingNumber": "050",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=050&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/libinfo/testing/thompson.php'>Thompson Library</a><br>&nbsp;<br>1858 Neil Avenue Mall<br>Reference and Circulation: 614-292-6785"
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=35'>Berry Cafe</a></strong><br>Grab-and-go sandwiches, baked goods, snacks, and a variety of coffee drinks.</p>"
			}, {
				"name": "Student Services",
				"info": "The BuckeyeBar, located in 60A Thompson Library, offers face-to-face technology consultation and service to Ohio State faculty, staff and students."
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,4M,06,07,08,09,10,11,"
			}],
			"departments": [{
				"name": "University Libraries",
				"url": "http://library.osu.edu"
			}, {
				"name": "Berry Café",
				"url": "https://dining.osu.edu/dininglocations/berry-caf/"
			}, {
				"name": "Buckeye Bar",
				"url": "https://ocio.osu.edu/help/locations"
			}]
		}, {
			"id": "179",
			"name": "Lincoln Tower",
			"latitude": "39.99846301",
			"longitude": "-83.02196661",
			"address": "1800 Cannon Dr",
			"buildingCode": "LT",
			"buildingNumber": "271",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=271&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: 14,15,16,17,18,19,20,21,22,23,,"
			}],
			"departments": [{
				"name": "Lincoln Tower Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/lincoln-house"
			}, {
				"name": "Service2Facilities",
				"url": "https://fml.osu.edu/fs/our-services/service2facilities/"
			}, {
				"name": "Office of Student Life, Student Conduct",
				"url": "http://studentconduct.osu.edu/"
			}, {
				"name": "Student Life Facility Planning and Design",
				"url": "http://fml.osu.edu/fpd"
			}, {
				"name": "Center for the Study of Student Life",
				"url": "https://cssl.osu.edu/"
			}, {
				"name": "Student Health Insurance",
				"url": "https://shi.osu.edu/"
			}, {
				"name": "Student Life Facility Services",
				"url": "http://fml.osu.edu/fs"
			}, {
				"name": "Student Life Budget and Planning ",
				"url": "https://slbp.osu.edu/"
			}, {
				"name": "Student Life Building and Mechanical Services",
				"url": "http://fml.osu.edu/bms"
			}, {
				"name": "Student Life Environmental Services ",
				"url": "http://fml.osu.edu/es"
			}, {
				"name": "Student Life Fiscal Support Services",
				"url": "https://fss.osu.edu/"
			}, {
				"name": "Student Life Human Resources",
				"url": "https://slhr.osu.edu/"
			}, {
				"name": "Student Life Risk and Energy Management",
				"url": "http://fml.osu.edu/rem"
			}, {
				"name": "Office of Student Life, University Dining Services",
				"url": "https://dining.osu.edu/"
			}, {
				"name": "Biomedical Informatics ",
				"url": "https://medicine.osu.edu/bmi/Pages/index.aspx"
			}, {
				"name": "Student life Energy Management and Sustainability",
				"url": "http://fml.osu.edu/ems"
			}]
		}, {
			"id": "180",
			"name": "Longaberger Alumni House",
			"latitude": "40.00880122",
			"longitude": "-83.02129443",
			"address": "2200 Olentangy River Rd",
			"buildingCode": null,
			"buildingNumber": "022",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=022&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "Bloch Cancer Survivors Plaza"
			}, {
				"name": "Lactation Room",
				"info": "Work Life Room, contact the receptionist"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": [{
				"name": "Alumni Association",
				"url": "https://www.osu.edu/alumni/"
			}]
		}, {
			"id": "182",
			"name": "Mack Hall",
			"latitude": "39.99598476",
			"longitude": "-83.0141905",
			"address": "1698 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "100",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=100&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Mack Hal Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/mack-hall"
			}]
		}, {
			"id": "183",
			"name": "MacQuigg Laboratory",
			"latitude": "40.00353364",
			"longitude": "-83.01168483",
			"address": "105 W Woodruff Ave",
			"buildingCode": "MQ",
			"buildingNumber": "265",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=265&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,04,05,"
			}],
			"departments": []
		}, {
			"id": "185",
			"name": "Waterman - Main Dairy Barn",
			"latitude": "40.00918873",
			"longitude": "-83.04146705",
			"address": "2433 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "317",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=317&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "188",
			"name": "Mason Hall",
			"latitude": "40.00439826",
			"longitude": "-83.01546758",
			"address": "250 W Woodruff Ave",
			"buildingCode": "MH",
			"buildingNumber": "252",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=252&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Entire Building - Hosted by the College of Business"
			}],
			"departments": []
		}, {
			"id": "189",
			"name": "Mathematics Building",
			"latitude": "40.00147664",
			"longitude": "-83.01475734",
			"address": "231 W 18th Ave",
			"buildingCode": "MA",
			"buildingNumber": "187",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=187&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Department of Mathematics",
				"url": "https://math.osu.edu/"
			}]
		}, {
			"id": "190",
			"name": "Mathematics Tower",
			"latitude": "40.00150997",
			"longitude": "-83.01442906",
			"address": "231 W 18th Ave",
			"buildingCode": "MW",
			"buildingNumber": "007",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=007&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,06,07,"
			}],
			"departments": [{
				"name": "Department of Mathematics",
				"url": "https://math.osu.edu/"
			}]
		}, {
			"id": "191",
			"name": "McCampbell Hall",
			"latitude": "39.9935717",
			"longitude": "-83.02053873",
			"address": "1581 Dodd Dr",
			"buildingCode": "MC",
			"buildingNumber": "303",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=303&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": [{
				"name": "Office of Geriatrics and Interprofessional Aging Studies",
				"url": "https://aging.osu.edu/"
			}, {
				"name": "Nisonger Center",
				"url": "http://nisonger.osu.edu/"
			}]
		}, {
			"id": "192",
			"name": "McCorkle Aquatic Pavilion",
			"latitude": "39.99837771",
			"longitude": "-83.01793427",
			"address": "1847 Neil Ave",
			"buildingCode": "MK",
			"buildingNumber": "247",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=247&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,"
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "https://recsports.osu.edu/"
			}]
		}, {
			"id": "193",
			"name": "McCracken Power Plant",
			"latitude": "40.00115169",
			"longitude": "-83.0166511",
			"address": "304 Annie & John Glenn Ave",
			"buildingCode": null,
			"buildingNumber": "069",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=069&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Utilities",
				"url": "https://fod.osu.edu/utilities/)"
			}]
		}, {
			"id": "194",
			"name": "McPherson Chemical Laboratory",
			"latitude": "40.00252216",
			"longitude": "-83.01232949",
			"address": "140 W 18th Ave",
			"buildingCode": "MP",
			"buildingNumber": "053",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=053&size=mobile&nodefault=1",
			"categories": [{
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=6'>The Campus Grind</a></strong><br>Coffee, bagels, soup, salads and sandwiches</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Astronomy",
				"url": "https://astronomy.osu.edu/"
			}, {
				"name": "The Campus Grind",
				"url": "https://dining.osu.edu/dininglocations/the-campus-grind/"
			}]
		}, {
			"id": "197",
			"name": "Meiling Hall",
			"latitude": "39.99412359",
			"longitude": "-83.01688932",
			"address": "370 W 9th Ave",
			"buildingCode": "ME",
			"buildingNumber": "281",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=281&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Entire Building - Hosted by the OSU Medical Center"
			}],
			"departments": [{
				"name": "School of Biomedical Sciences",
				"url": "https://medicine.osu.edu/bms/Pages/index.aspx"
			}, {
				"name": "Department of Cancer Biology and Genetics",
				"url": "https://medicine.osu.edu/cancer-biology-genetics/pages/index.aspx"
			}]
		}, {
			"id": "198",
			"name": "Mendenhall Laboratory",
			"latitude": "39.99839396",
			"longitude": "-83.01114826",
			"address": "125 S Oval Mall",
			"buildingCode": "ML",
			"buildingNumber": "054",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=054&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,04,"
			}],
			"departments": [{
				"name": "School of Earth Sciences",
				"url": "https://earthsciences.osu.edu/"
			}]
		}, {
			"id": "199",
			"name": "Mershon Auditorium",
			"latitude": "40.00054269",
			"longitude": "-83.00895461",
			"address": "1871 N High St",
			"buildingCode": "MM",
			"buildingNumber": "055",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=055&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,04,05,"
			}],
			"departments": [{
				"name": "Wexner Center for the Arts",
				"url": "https://www.wexarts.org/"
			}]
		}, {
			"id": "200",
			"name": "Mershon Center",
			"latitude": "39.99182518",
			"longitude": "-83.014346",
			"address": "1501 Neil Ave",
			"buildingCode": "MM",
			"buildingNumber": "047",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=047&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "The Mershon Center for International Security Studies",
				"url": "https://mershoncenter.osu.edu/"
			}]
		}, {
			"id": "201",
			"name": "Morehouse Medical Plaza - Concourse",
			"latitude": "40.00129371",
			"longitude": "-83.03154418",
			"address": "2050 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "882",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=882&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "202",
			"name": "Morehouse Medical Plaza - Pavilion",
			"latitude": "40.00132283",
			"longitude": "-83.03287566",
			"address": "2050 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "880",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=880&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "204",
			"name": "Morehouse Medical Plaza - Tower",
			"latitude": "40.00085331",
			"longitude": "-83.03386517",
			"address": "2050 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "881",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=881&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "205",
			"name": "Morrill Tower",
			"latitude": "40.00003865",
			"longitude": "-83.02187836",
			"address": "1900 Cannon Dr",
			"buildingCode": "MT",
			"buildingNumber": "272",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=272&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=9'>Cafeteria Dining</strong></a><br>Traditional cafeteria dining facilities.<br><br><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=19'>Morrill Market</a></strong></p>"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,"
			}],
			"departments": [{
				"name": "Office of Student Life, University Housing",
				"url": "https://housing.osu.edu/"
			}, {
				"name": "Traditions at Morrill ",
				"url": "https://dining.osu.edu/dininglocations/traditions-dining/"
			}, {
				"name": "Morrill C-Store",
				"url": "https://dining.osu.edu/dininglocations/convenience-store/"
			}, {
				"name": "Morrill Tower Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/morrill-tower"
			}]
		}, {
			"id": "206",
			"name": "Morrison Tower",
			"latitude": "39.99583711",
			"longitude": "-83.01278661",
			"address": "196 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "190",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=190&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,05,06,07,08,09,10,"
			}],
			"departments": [{
				"name": "Morrison Tower Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/morrison-tower"
			}]
		}, {
			"id": "207",
			"name": "Mount Hall",
			"latitude": "40.00405648",
			"longitude": "-83.0367706",
			"address": "1050 Carmack Rd",
			"buildingCode": "MO",
			"buildingNumber": "311",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=311&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Office of Distance Education and eLearning",
				"url": "https://odee.osu.edu/"
			}, {
				"name": "Office of the Chief Information Officer ",
				"url": "https://ocio.osu.edu/"
			}]
		}, {
			"id": "211",
			"name": "Neil Ave, 1656-1660",
			"latitude": "39.99527872",
			"longitude": "-83.01424841",
			"address": "1656-1660 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "912",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=912&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "213",
			"name": "William Hall Complex - Neil Building",
			"latitude": "39.99383921",
			"longitude": "-83.01398829",
			"address": "1578 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "846",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=846&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=5'>The MarketPlace at Neil</a></strong><br>East/West, Grab and Go, Soup Spot & Fresh Greens, Stone Hearth, StreetSweets and The Deli</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,,"
			}],
			"departments": [{
				"name": "Marketplace",
				"url": "https://dining.osu.edu/dininglocations/marketplace/"
			}, {
				"name": "Streetsweets",
				"url": "https://dining.osu.edu/dininglocations/marketplace/"
			}, {
				"name": "Marketplace C-Store",
				"url": "https://dining.osu.edu/dininglocations/convenience-store/"
			}, {
				"name": "Neil Avenue Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/neil-avenue"
			}]
		}, {
			"id": "214",
			"name": "Mendoza House",
			"latitude": "40.00429995",
			"longitude": "-83.01418056",
			"address": "190 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "260",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=260&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Mendoza House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/mendoza-house"
			}]
		}, {
			"id": "215",
			"name": "Harding Hospital",
			"latitude": "39.99563476",
			"longitude": "-83.01996908",
			"address": "1670 Upham Dr",
			"buildingCode": null,
			"buildingNumber": "165",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=165&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": [{
				"name": "Department of Psychiatry and Behavioral Health ",
				"url": "https://wexnermedical.osu.edu/neurological-institute/departments-and-centers/departments/department-psychiatry-and-behavioral-health"
			}, {
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "216",
			"name": "Newman and Wolfrom Laboratory of Chemistry",
			"latitude": "40.0023758",
			"longitude": "-83.01136588",
			"address": "100 W 18th Ave",
			"buildingCode": null,
			"buildingNumber": "147",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=147&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Chemistry & Biochemistry",
				"url": "https://chemistry.osu.edu/"
			}]
		}, {
			"id": "217",
			"name": "Newton Hall",
			"latitude": "39.99398816",
			"longitude": "-83.01486554",
			"address": "1585 Neil Ave",
			"buildingCode": "NH",
			"buildingNumber": "275",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=275&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Lactation Room",
				"info": "Room 110, contact Katie Thomson at 614-292-8900"
			}],
			"departments": [{
				"name": "College of Nursing ",
				"url": "https://nursing.osu.edu/"
			}]
		}, {
			"id": "218",
			"name": "Nicklaus Museum",
			"latitude": "40.00985166",
			"longitude": "-83.02361309",
			"address": "2355 Olentangy River Rd",
			"buildingCode": null,
			"buildingNumber": "091",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=091&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "219",
			"name": "Spielman Comprehensive Breast Center",
			"latitude": "39.9835377",
			"longitude": "-83.02316007",
			"address": "1145 Olentangy River Rd",
			"buildingCode": null,
			"buildingNumber": "874",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=874&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "223",
			"name": "North Star Rd, 2470",
			"latitude": "40.00846312",
			"longitude": "-83.04693935",
			"address": "2470 North Star Rd",
			"buildingCode": null,
			"buildingNumber": "094",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=094&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "224",
			"name": "Northwood-High Building",
			"latitude": "40.00773186",
			"longitude": "-83.01009907",
			"address": "2231 N High St",
			"buildingCode": null,
			"buildingNumber": "357",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=357&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Family Medicine",
				"url": "https://wexnermedical.osu.edu/locations-and-parking/family-medicine-at-thomas-rardin"
			}, {
				"name": "University District Organization",
				"url": "https://www.universitydistrict.org/"
			}]
		}, {
			"id": "225",
			"name": "Norton House",
			"latitude": "40.00482563",
			"longitude": "-83.013875",
			"address": "2114 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "186",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=186&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,G,01,02,03,"
			}],
			"departments": [{
				"name": "Norton House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/norton-house"
			}]
		}, {
			"id": "227",
			"name": "Ohio Stadium",
			"latitude": "40.00167046",
			"longitude": "-83.01972909",
			"address": "411 Woody Hayes Dr",
			"buildingCode": "ST",
			"buildingNumber": "082",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=082&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "The 'shoe"
			}, {
				"name": "Wireless",
				"info": "Floors: Gs,1e,1s,1w,2e,4w,8w,9w,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}, {
				"name": "The Ohio State University Marching Band",
				"url": "https://tbdbitl.osu.edu/"
			}, {
				"name": "Center for Folklore Studies (CFS)",
				"url": "https://cfs.osu.edu/"
			}]
		}, {
			"id": "228",
			"name": "Ohio Union",
			"latitude": "39.99765973",
			"longitude": "-83.00864174",
			"address": "1739 N High St",
			"buildingCode": "OU",
			"buildingNumber": "161",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=161&size=mobile&nodefault=1",
			"categories": [{
				"name": "Art",
				"info": "Multiple art installations throughout the building. "
			}, {
				"name": "Food",
				"info": "Many dining options: Coffee shop, diner, cafeteria"
			}, {
				"name": "Lactation Room",
				"info": "Room 2058, No key necessary"
			}, {
				"name": "Lactation Room",
				"info": "Room 1003, No key necessary"
			}, {
				"name": "Student Services",
				"info": "3040 Ohio Union\r\n1739 N. High Street"
			}, {
				"name": "Books",
				"info": "<a href=\"http://ohiostate.bncollege.com/\">Ohio State University Bookstore</a> (branch)"
			}],
			"departments": [{
				"name": "Office of Student Life",
				"url": "https://studentlife.osu.edu/"
			}, {
				"name": "Multicultural Center",
				"url": "http://mcc.osu.edu/"
			}, {
				"name": "Off-Campus and Commuter Student Engagement",
				"url": "https://offcampus.osu.edu/"
			}, {
				"name": "BuckID",
				"url": "https://buckid.osu.edu/"
			}, {
				"name": "Bookstore",
				"url": "https://ohiostate.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=33552&catalogId=10001&langId=-1"
			}, {
				"name": "Union Market",
				"url": "https://ohiounion.osu.edu/dine_and_shop/union_market"
			}, {
				"name": "Parent and Family Relations",
				"url": "https://parent.osu.edu/"
			}, {
				"name": "Student Life Development",
				"url": "https://studentlife.osu.edu/development/"
			}, {
				"name": "Sloopy's Diner",
				"url": "https://ohiounion.osu.edu/dine_and_shop/sloopys"
			}, {
				"name": "Woody's Tavern",
				"url": "https://ohiounion.osu.edu/dine_and_shop/woodys"
			}, {
				"name": "Espress-OH",
				"url": "https://ohiounion.osu.edu/dine_and_shop/espressoh"
			}, {
				"name": "Center for Student Leadership & Service\r\n",
				"url": "https://ohiounion.osu.edu/get_involved/csls"
			}, {
				"name": "Ohio Union",
				"url": "http://ohiounion.osu.edu/"
			}, {
				"name": "Sorority and Fraternity Life",
				"url": "https://ohiounion.osu.edu/get_involved/sorority_fraternity"
			}, {
				"name": "USBank",
				"url": "https://www.usbank.com/student-banking/ohio-state-university/index.html"
			}]
		}, {
			"id": "231",
			"name": "Ornamental Plant Germplasm Center",
			"latitude": "40.00191214",
			"longitude": "-83.02776636",
			"address": "670 Vernon Tharp St",
			"buildingCode": null,
			"buildingNumber": "012",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=012&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Ornamental Plant Germplasm Center",
				"url": "https://opgc.osu.edu/"
			}]
		}, {
			"id": "232",
			"name": "Orton Hall",
			"latitude": "39.99832824",
			"longitude": "-83.01193358",
			"address": "155 S Oval Mall",
			"buildingCode": "OR",
			"buildingNumber": "060",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=060&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/geology/'>Geology Library</a><br>180 Orton Hall<br>155 South Oval Drive<br>292-2428"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Orton Geological Museum",
				"url": "https://ortongeologicalmuseum.osu.edu/"
			}, {
				"name": "Geology Library",
				"url": "https://library.osu.edu/locations/geology"
			}]
		}, {
			"id": "233",
			"name": "Oxley Hall",
			"latitude": "39.99654916",
			"longitude": "-83.01439966",
			"address": "1712 Neil Ave",
			"buildingCode": "OX",
			"buildingNumber": "102",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=102&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Department of Linguisitcs",
				"url": "https://linguistics.osu.edu/"
			}]
		}, {
			"id": "234",
			"name": "Page Hall",
			"latitude": "39.99915767",
			"longitude": "-83.00963725",
			"address": "1810 College Rd",
			"buildingCode": "PA",
			"buildingNumber": "061",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=061&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,01,02,03,"
			}],
			"departments": [{
				"name": "John Glenn School of Public Affairs",
				"url": "http://glenn.osu.edu/"
			}, {
				"name": "Center for Higher Education Enterprise",
				"url": "https://chee.osu.edu/"
			}]
		}, {
			"id": "236",
			"name": "Parker Food Science and Technology",
			"latitude": "40.0029238",
			"longitude": "-83.02870006",
			"address": "2015 Fyffe Ct",
			"buildingCode": "FS",
			"buildingNumber": "064",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=064&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Food Science and Technology",
				"url": "https://fst.osu.edu/"
			}]
		}, {
			"id": "237",
			"name": "Parking Garage - Ninth Ave W",
			"latitude": "39.99273798",
			"longitude": "-83.01666659",
			"address": "355 W 9th Ave",
			"buildingCode": null,
			"buildingNumber": "359",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=359&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage."
			}],
			"departments": []
		}, {
			"id": "238",
			"name": "Parking Garage - Eleventh Ave",
			"latitude": "39.9951312",
			"longitude": "-83.01301546",
			"address": "229 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "352",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=352&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage."
			}],
			"departments": []
		}, {
			"id": "239",
			"name": "Parking Garage - Twelfth Ave",
			"latitude": "39.99650726",
			"longitude": "-83.01740631",
			"address": "340 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "387",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=387&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "240",
			"name": "Parking Garage - Arps",
			"latitude": "40.00276967",
			"longitude": "-83.00996725",
			"address": "1990 College Rd",
			"buildingCode": null,
			"buildingNumber": "278",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=278&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage."
			}],
			"departments": []
		}, {
			"id": "241",
			"name": "Parking Garage - SafeAuto Hospitals",
			"latitude": "39.99345837",
			"longitude": "-83.01824208",
			"address": "1585 Westpark St",
			"buildingCode": null,
			"buildingNumber": "170",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=170&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "242",
			"name": "Parking Garage - Cannon Dr N and S",
			"latitude": "39.99498939",
			"longitude": "-83.02073854",
			"address": "1640 Cannon Dr",
			"buildingCode": null,
			"buildingNumber": "172",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=172&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "243",
			"name": "Parking Garage - Neil Ave",
			"latitude": "39.99762339",
			"longitude": "-83.01742797",
			"address": "1801 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "287",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=287&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "244",
			"name": "Parking Garage - Northwest",
			"latitude": "40.00295087",
			"longitude": "-83.01618113",
			"address": "271 Ives Dr",
			"buildingCode": null,
			"buildingNumber": "083",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=083&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage."
			}],
			"departments": []
		}, {
			"id": "245",
			"name": "Parking Garage - Ohio Union North",
			"latitude": "39.99888119",
			"longitude": "-83.00893335",
			"address": "1780 College Rd",
			"buildingCode": null,
			"buildingNumber": "288",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=288&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": "Note: This is a permit parking garage until 4p.m."
			}],
			"departments": []
		}, {
			"id": "246",
			"name": "Parking Garage - Tuttle Park Pl",
			"latitude": "40.00285342",
			"longitude": "-83.0171453",
			"address": "2050 Tuttle Park Pl",
			"buildingCode": null,
			"buildingNumber": "088",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=088&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=10'>Oxley's By The Numbers</a></strong><br>Pizza, subs and more.</p>"
			}],
			"departments": [{
				"name": "OCIO Buckeyebar at Tech Hub ",
				"url": "https://ocio.osu.edu/help/locations"
			}, {
				"name": "Oxley's By The Numbers",
				"url": "https://dining.osu.edu/dininglocations/oxleys-by-the-numbers/"
			}, {
				"name": "Tech Hub",
				"url": "https://techhub.osu.edu/"
			}]
		}, {
			"id": "247",
			"name": "Parks Hall",
			"latitude": "39.99638371",
			"longitude": "-83.02093848",
			"address": "500 W 12th Ave",
			"buildingCode": "PK",
			"buildingNumber": "273",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=273&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,05,"
			}],
			"departments": [{
				"name": "College of Pharmacy",
				"url": "https://pharmacy.osu.edu/"
			}]
		}, {
			"id": "248",
			"name": "Paterson Hall",
			"latitude": "39.99639008",
			"longitude": "-83.01253395",
			"address": "191 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "103",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=103&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Paterson Hall Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/paterson-hall"
			}]
		}, {
			"id": "249",
			"name": "Pennsylvania Place",
			"latitude": "39.99146045",
			"longitude": "-83.01481562",
			"address": "1478 Pennsylvania Ave",
			"buildingCode": null,
			"buildingNumber": "048",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=048&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Pennsylvania Place",
				"url": "https://housing.osu.edu/roomsearch/pennsylvania-place"
			}]
		}, {
			"id": "251",
			"name": "Pfahl Hall",
			"latitude": "40.00432615",
			"longitude": "-83.01647741",
			"address": "280 W Woodruff Ave",
			"buildingCode": "PF",
			"buildingNumber": "253",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=253&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,01,02,03,"
			}],
			"departments": [{
				"name": "The Inn at Fisher College & Pfahl Conference Center",
				"url": "https://www.theblackwell.com/"
			}]
		}, {
			"id": "252",
			"name": "Physics Research Building",
			"latitude": "40.00334823",
			"longitude": "-83.01424878",
			"address": "191 W Woodruff Ave",
			"buildingCode": "PY",
			"buildingNumber": "070",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=070&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,04,"
			}],
			"departments": [{
				"name": "Physics",
				"url": "http://www.physics.ohio-state.edu/"
			}, {
				"name": "Interdisciplinary Biophysics Graduate Program",
				"url": "https://biophysics.osu.edu/"
			}, {
				"name": "Center for Cosmology and AstroParticle Physics (CCAPP)",
				"url": "http://ccapp.osu.edu/"
			}, {
				"name": "Exploration of Novel Complex Materials (ENCOMM)",
				"url": "https://encomm.osu.edu/"
			}, {
				"name": "Center for Emergent Materials (CEM)",
				"url": "http://cem.osu.edu/"
			}]
		}, {
			"id": "256",
			"name": "Plumb Hall",
			"latitude": "40.00355924",
			"longitude": "-83.02666443",
			"address": "2027 Coffey Rd",
			"buildingCode": "PL",
			"buildingNumber": "066",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=066&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": []
		}, {
			"id": "258",
			"name": "Pomerene Alumnae Scholarship House",
			"latitude": "39.99407885",
			"longitude": "-83.01327442",
			"address": "231 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "869",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=869&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Pomerene House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/pomerene-house"
			}]
		}, {
			"id": "259",
			"name": "Pomerene Hall",
			"latitude": "39.99735998",
			"longitude": "-83.01446185",
			"address": "1760 Neil Ave",
			"buildingCode": "PO",
			"buildingNumber": "067",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=067&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=8'>Mirror Lake Creamery & Grill</a></strong><br>Ice cream, milkshakes, fresh-grilled hamburgers and a variety of made-to-order items</p>"
			}, {
				"name": "Student Services",
				"info": "Support services and programs empowering students who have disabilities"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,"
			}],
			"departments": []
		}, {
			"id": "260",
			"name": "Postle Hall",
			"latitude": "39.99605682",
			"longitude": "-83.01614904",
			"address": "305 W 12th Ave",
			"buildingCode": "PH",
			"buildingNumber": "024",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=024&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Lactation Room",
				"info": "Canteen area-lower level, contact Beth DeLong at 614-292-4250"
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,"
			}],
			"departments": [{
				"name": "College of Dentistry",
				"url": "https://dentistry.osu.edu/"
			}]
		}, {
			"id": "264",
			"name": "Pressey Hall",
			"latitude": "40.00394173",
			"longitude": "-83.03794182",
			"address": "1070 Carmack Rd",
			"buildingCode": "PR",
			"buildingNumber": "309",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=309&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://omega.cohums.ohio-state.edu/epigraphy/'>Center for Epigraphical and Palaeographical Studies</a><br>190 Pressey Hall<br>1070 Carmack Rd<br>292-3280"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,"
			}],
			"departments": [{
				"name": "Center for Epigraphical and Palaeographical Studies",
				"url": "https://epigraphy.osu.edu/"
			}, {
				"name": "University Press",
				"url": "https://ohiostatepress.org/"
			}, {
				"name": "Department of Speech and Hearing Sciences ",
				"url": "https://sphs.osu.edu/"
			}]
		}, {
			"id": "265",
			"name": "Printing Facility",
			"latitude": "40.01138284",
			"longitude": "-83.03433746",
			"address": "2500 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "290",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=290&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Uniprint",
				"url": "http://uniprint.osu.edu"
			}]
		}, {
			"id": "266",
			"name": "Prior Hall",
			"latitude": "39.99477158",
			"longitude": "-83.0170996",
			"address": "376 W 10th Ave",
			"buildingCode": "PI",
			"buildingNumber": "302",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=302&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.med.ohio-state.edu/'>Health Sciences Library</a><br>376 West 10th Avenue<br>Reference: 292-4869 Circulation: 292-4861"
			}, {
				"name": "Wireless",
				"info": "Entire Building - Hosted by the OSU Medical Center"
			}],
			"departments": [{
				"name": "Caffeine Element",
				"url": "https://dining.osu.edu/dininglocations/the-caffeine-element/"
			}, {
				"name": "Health Sciences Library",
				"url": "https://hsl.osu.edu/"
			}]
		}, {
			"id": "272",
			"name": "Radiation Dosimetry Calibration Facility",
			"latitude": "40.0013168",
			"longitude": "-83.04376079",
			"address": "1296 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "155",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=155&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "273",
			"name": "Ramseyer Hall",
			"latitude": "40.00330585",
			"longitude": "-83.00963518",
			"address": "29 W Woodruff Ave",
			"buildingCode": "RA",
			"buildingNumber": "090",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=090&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": []
		}, {
			"id": "276",
			"name": "Recreation and Physical Activity Center",
			"latitude": "39.9995101",
			"longitude": "-83.0183801",
			"address": "337 Annie & John Glenn Ave",
			"buildingCode": "RP",
			"buildingNumber": "246",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=246&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=21'>Courtside Cafe and Juice 2</a></strong><br>Focus on fresh, fast and healthful food</p>"
			}, {
				"name": "Lactation Room",
				"info": "Room B40K, contact Zach Kreft at 614-292-7671"
			}, {
				"name": "Student Services",
				"info": "Promotes the wellness of OSU students and their communities.\r\n\r\nIn room B130, RPAC."
			}, {
				"name": "Wireless",
				"info": "Floors: G,01,02,"
			}],
			"departments": [{
				"name": "Recreational Sports",
				"url": "https://recsports.osu.edu/facilities/recreation-and-physical-activity-center-rpac"
			}, {
				"name": "Courtside Cafe",
				"url": "https://dining.osu.edu/dininglocations/courtside-cafe-juice2/"
			}, {
				"name": "Student Wellness Center",
				"url": "http://swc.osu.edu/"
			}, {
				"name": "Juice2",
				"url": "https://dining.osu.edu/dininglocations/courtside-cafe-juice2/"
			}]
		}, {
			"id": "281",
			"name": "Research Center",
			"latitude": "39.9990979",
			"longitude": "-83.0434438",
			"address": "1314 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "073",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=073&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Ohio Sea Grant",
				"url": "http://ohioseagrant.osu.edu/"
			}, {
				"name": "Environmental Health and Safety",
				"url": "https://ehs.osu.edu/"
			}]
		}, {
			"id": "282",
			"name": "Research Foundation",
			"latitude": "39.99944983",
			"longitude": "-83.0337253",
			"address": "1960 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "200",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 120A, contact Martha Bainer at 614-292-7326"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,"
			}],
			"departments": [{
				"name": "Office of Sponsored Programs (OSP)",
				"url": "http://osp.osu.edu/"
			}, {
				"name": "Office of Responsible Research Practices (ORRP)",
				"url": "http://orrp.osu.edu/"
			}, {
				"name": "Office of Research Compliance (ORC)",
				"url": "http://orc.osu.edu/"
			}]
		}, {
			"id": "284",
			"name": "Rhodes Hall",
			"latitude": "39.99515458",
			"longitude": "-83.01805434",
			"address": "450 W 10th Ave",
			"buildingCode": "RD",
			"buildingNumber": "354",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=354&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://medicalcenter.osu.edu/patientcare/hospitalsandservices/hospitals/university/visitorinfo/foodservices/'>Medical Center dining</a></strong><br>Seasons Cafe, Espress Oasis, Wendy's Old Fashioned Hamburgers</p>"
			}],
			"departments": [{
				"name": "Hospital Gift Shop",
				"url": "https://wexnermedical.osu.edu/patient-and-visitor-guide/retail-shops"
			}, {
				"name": "University Hospitals ",
				"url": "https://wexnermedical.osu.edu/locations-and-parking/university-hospital"
			}]
		}, {
			"id": "285",
			"name": "Riffe Building",
			"latitude": "39.99674263",
			"longitude": "-83.02043704",
			"address": "496 W 12th Ave",
			"buildingCode": "RF",
			"buildingNumber": "266",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=266&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/biosci/'>Biological Sci./Pharmacy Library</a><br>102 Riffe Building<br>496 West 12th Avenue<br>292-1744"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Nuclear Magnetic Resonance (NMR)",
				"url": "http://www.ccic.ohio-state.edu/NMR"
			}, {
				"name": "Biological Sciences/Pharmacy Library",
				"url": "https://library.osu.edu/locations/bpl"
			}, {
				"name": "Department of Microbiology ",
				"url": "http://osumicrobiology.org/"
			}]
		}, {
			"id": "286",
			"name": "Rightmire Hall",
			"latitude": "40.00316116",
			"longitude": "-83.03744128",
			"address": "1060 Carmack Rd",
			"buildingCode": "RH",
			"buildingNumber": "308",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=308&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Biotech Support Facility",
				"url": "https://caps.osu.edu/biotech-support-facility"
			}, {
				"name": "Biological Chemistry and Pharmacology",
				"url": "https://medicine.osu.edu/bcpharm/Pages/index.aspx"
			}]
		}, {
			"id": "287",
			"name": "Riverwatch Tower",
			"latitude": "40.00735321",
			"longitude": "-83.01987232",
			"address": "364 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "969",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=969&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "288",
			"name": "Ross Heart Hospital",
			"latitude": "39.99448108",
			"longitude": "-83.01843745",
			"address": "452 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "353",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=353&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}, {
				"name": "Lactation Room",
				"info": "Room H1056T, call 614-293-8910"
			}],
			"departments": [{
				"name": "Ross Heart Hospital ",
				"url": "https://wexnermedical.osu.edu/locations-and-parking/richard-m-ross-heart-hospital"
			}]
		}, {
			"id": "289",
			"name": "Waterman - Rothenbuhler Honey Bee Research Laboratory",
			"latitude": "40.01119055",
			"longitude": "-83.0406593",
			"address": "2501 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "384",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=384&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "292",
			"name": "Sandefur Wetland Pavilion",
			"latitude": "40.02039893",
			"longitude": "-83.01978065",
			"address": "352 W Dodridge St",
			"buildingCode": null,
			"buildingNumber": "215",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=215&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "293",
			"name": "Satellite Communications Facility",
			"latitude": "40.0026381",
			"longitude": "-83.04463609",
			"address": "1318 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "264",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=264&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "294",
			"name": "Schoenbaum Hall",
			"latitude": "40.00432859",
			"longitude": "-83.01475293",
			"address": "210 W Woodruff Ave",
			"buildingCode": "SB",
			"buildingNumber": "251",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=251&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Entire Building - Hosted by the College of Business"
			}],
			"departments": []
		}, {
			"id": "295",
			"name": "William Hall Complex - Scholars House East",
			"latitude": "39.99407695",
			"longitude": "-83.012897",
			"address": "221 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "848",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=848&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Scholars East Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/scholars-east"
			}]
		}, {
			"id": "296",
			"name": "William Hall Complex - Scholars House West",
			"latitude": "39.99409928",
			"longitude": "-83.01351541",
			"address": "239 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "847",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=847&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Scholars West Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/scholars-west"
			}]
		}, {
			"id": "297",
			"name": "Schottenstein Center",
			"latitude": "40.00758091",
			"longitude": "-83.02513483",
			"address": "555 Borror Dr",
			"buildingCode": "JS",
			"buildingNumber": "081",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=081&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,05,"
			}],
			"departments": [{
				"name": "Schottenstein Center",
				"url": "https://www.schottensteincenter.com/"
			}]
		}, {
			"id": "298",
			"name": "Eighteenth Avenue Library",
			"latitude": "40.0016329",
			"longitude": "-83.01333843",
			"address": "175 W 18th Ave",
			"buildingCode": "SE",
			"buildingNumber": "005",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=005&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/sel/'>Science & Engineering Library</a><br>&nbsp;<br>175 West 18th Avenue<br>Circulation tel: 292-0211"
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=34'>Terra Byte Cafe</a></strong><br>Grab-and-go sandwiches, baked goods, snacks, and a variety of coffee drinks</p>"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Terra Byte Café",
				"url": "https://dining.osu.edu/dininglocations/terra-byte-cafe/"
			}, {
				"name": "Eighteenth Avenue Library ",
				"url": "https://library.osu.edu/about/locations/18th-avenue-library/"
			}]
		}, {
			"id": "299",
			"name": "Scott Hall",
			"latitude": "40.00341844",
			"longitude": "-83.0387053",
			"address": "1090 Carmack Rd",
			"buildingCode": "SC",
			"buildingNumber": "310",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=310&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/libinfo/PLR.html'>Polar Library</a><br>176 Scott Hall<br>1090 Carmack Road<br>292-6715"
			}],
			"departments": [{
				"name": "Byrd Polar Research Center",
				"url": "http://www-bprc.mps.ohio-state.edu/"
			}]
		}, {
			"id": "302",
			"name": "Sherman Studio Art Center",
			"latitude": "39.99973803",
			"longitude": "-83.03770611",
			"address": "1055 Carmack Rd",
			"buildingCode": "SA",
			"buildingNumber": "358",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=358&size=mobile&nodefault=1",
			"categories": [{
				"name": "Art",
				"info": "Clean Space Gallery at the Sherman Studio Art Center"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Art",
				"url": "https://art.osu.edu/spaces"
			}]
		}, {
			"id": "303",
			"name": "Siebert Hall",
			"latitude": "39.99596568",
			"longitude": "-83.01228292",
			"address": "184 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "099",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=099&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,06,07,08,09,10,"
			}],
			"departments": [{
				"name": "Siebert Hall Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/siebert-hall"
			}]
		}, {
			"id": "304",
			"name": "Sisson Hall",
			"latitude": "40.00001366",
			"longitude": "-83.02565221",
			"address": "1920 Coffey Rd",
			"buildingCode": "SI",
			"buildingNumber": "080",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=080&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,"
			}],
			"departments": []
		}, {
			"id": "307",
			"name": "Smith Laboratory",
			"latitude": "40.00243085",
			"longitude": "-83.01328279",
			"address": "174 W 18th Ave",
			"buildingCode": "SM",
			"buildingNumber": "065",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=065&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Office of Energy and Environment",
				"url": "http://oee.osu.edu/"
			}, {
				"name": "Arts and Sciences Honors Advising",
				"url": "http://aschonors.osu.edu/"
			}, {
				"name": "OSU Planetarium",
				"url": "http://planetarium.osu.edu"
			}, {
				"name": "Center for the Study and Teaching of Writing",
				"url": "https://cstw.osu.edu/"
			}]
		}, {
			"id": "308",
			"name": "St John Arena",
			"latitude": "40.00533238",
			"longitude": "-83.0191574",
			"address": "410 Woody Hayes Dr",
			"buildingCode": null,
			"buildingNumber": "076",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=076&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "309",
			"name": "Starling Loving Hall",
			"latitude": "39.9949322",
			"longitude": "-83.01602227",
			"address": "320 W 10th Ave",
			"buildingCode": "SL",
			"buildingNumber": "176",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=176&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,"
			}],
			"departments": [{
				"name": "University Hospitals",
				"url": "https://wexnermedical.osu.edu/"
			}]
		}, {
			"id": "310",
			"name": "State of Ohio Computer Center",
			"latitude": "40.00512874",
			"longitude": "-83.04659921",
			"address": "1320 Arthur Adams Dr",
			"buildingCode": null,
			"buildingNumber": "949",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=949&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "312",
			"name": "Stillman Hall",
			"latitude": "40.00186513",
			"longitude": "-83.01099502",
			"address": "1947 College Rd",
			"buildingCode": "SH",
			"buildingNumber": "084",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=084&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "College of Social Work",
				"url": "https://csw.osu.edu/"
			}, {
				"name": "Office of Outreach and Engagement",
				"url": "http://outreach.osu.edu"
			}, {
				"name": "Arts and Sciences Advancement",
				"url": "https://artsandsciences.osu.edu/about/college/contacts#advancement"
			}]
		}, {
			"id": "313",
			"name": "Stores and Receiving",
			"latitude": "40.01431382",
			"longitude": "-83.03555851",
			"address": "2650 Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "381",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=381&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Central Receiving ",
				"url": "https://busfin.osu.edu/buy-schedule-travel/central-receiving"
			}, {
				"name": "Stores",
				"url": "https://busfin.osu.edu/buy-schedule-travel/purchasing/purchase-products/stores"
			}, {
				"name": "University Mail Services",
				"url": "https://busfin.osu.edu/buy-schedule-travel/mail-services"
			}, {
				"name": "Surplus",
				"url": "https://busfin.osu.edu/buy-schedule-travel/surplus"
			}]
		}, {
			"id": "314",
			"name": "Park-Stradley Hall",
			"latitude": "39.99583142",
			"longitude": "-83.01070492",
			"address": "120 W 11th Ave",
			"buildingCode": "PA",
			"buildingNumber": "851",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=851&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}],
			"departments": [{
				"name": "Park Stradley Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/park-stradley-hall"
			}]
		}, {
			"id": "315",
			"name": "Sullivant Hall",
			"latitude": "39.99945284",
			"longitude": "-83.00874701",
			"address": "1813 N High St",
			"buildingCode": "SU",
			"buildingNumber": "106",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=106&size=mobile&nodefault=1",
			"categories": [{
				"name": "Computing",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://cartoons.osu.edu/'>Billy Ireland Cartoon Library and Museum</a><br>1813 North High Street<br>292-0538"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Department of Dance",
				"url": "http://dance.osu.edu"
			}, {
				"name": "Department of Arts Administration, Education and Policy",
				"url": "http://arted.osu.edu/"
			}, {
				"name": "Advanced Computing Center for the Arts &amp; Design",
				"url": "http://accad.osu.edu/"
			}, {
				"name": "Barnett Center for Integrated Arts & Enterprise",
				"url": "https://barnettcenter.osu.edu"
			}, {
				"name": "Billy Ireland Cartoon Library",
				"url": "https://cartoons.osu.edu"
			}]
		}, {
			"id": "316",
			"name": "Taylor Tower",
			"latitude": "40.00568221",
			"longitude": "-83.01068714",
			"address": "55 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "268",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=268&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,06,07,08,09,10,11,12,13,"
			}],
			"departments": [{
				"name": "Taylor Tower Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/taylor-tower"
			}]
		}, {
			"id": "317",
			"name": "Telecommunications Network Center",
			"latitude": "39.99247931",
			"longitude": "-83.01522755",
			"address": "320 W 8th Ave",
			"buildingCode": null,
			"buildingNumber": "379",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=379&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,01,"
			}],
			"departments": []
		}, {
			"id": "318",
			"name": "Townshend Hall",
			"latitude": "39.99977583",
			"longitude": "-83.01579784",
			"address": "1885 Neil Ave Mall",
			"buildingCode": "TO",
			"buildingNumber": "087",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=087&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Sociology",
				"url": "https://sociology.osu.edu/"
			}, {
				"name": "Institute for Population Research",
				"url": "https://ipr.osu.edu/"
			}, {
				"name": "International Studies",
				"url": "https://internationalstudies.osu.edu/"
			}, {
				"name": "Criminal Justice Research Center",
				"url": "https://cjrc.osu.edu/"
			}]
		}, {
			"id": "321",
			"name": "Turfgrass Foundation Research and Education Facility",
			"latitude": "40.01360208",
			"longitude": "-83.04663208",
			"address": "2710 North Star Rd",
			"buildingCode": "TF",
			"buildingNumber": "983",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=983&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "322",
			"name": "Tzagournis Medical Research Facility",
			"latitude": "39.99643129",
			"longitude": "-83.01875106",
			"address": "420 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "163",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=163&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "323",
			"name": "University Hall",
			"latitude": "40.00052277",
			"longitude": "-83.01443196",
			"address": "230 N Oval Mall",
			"buildingCode": "UH",
			"buildingNumber": "339",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=339&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,"
			}],
			"departments": [{
				"name": "Department of African American and African Studies",
				"url": "https://aaas.osu.edu/"
			}, {
				"name": "College of Arts and Sciences",
				"url": "https://artsandsciences.osu.edu/"
			}, {
				"name": "Department of Classics",
				"url": "https://classics.osu.edu/"
			}, {
				"name": "The Graduate School",
				"url": "https://gradsch.osu.edu/"
			}, {
				"name": "Department of Philosophy",
				"url": "https://philosophy.osu.edu/"
			}, {
				"name": "Department of Women’s, Gender and Sexuality Studies",
				"url": "https://wgss.osu.edu"
			}]
		}, {
			"id": "325",
			"name": "Veterinary Medical Center",
			"latitude": "40.00086499",
			"longitude": "-83.02768459",
			"address": "601 Vernon Tharp St",
			"buildingCode": null,
			"buildingNumber": "299",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=299&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,"
			}],
			"departments": [{
				"name": "Veterinary Clinical Sciences",
				"url": "https://vet.osu.edu/clinical-sciences"
			}, {
				"name": "Veterinary Medical Center",
				"url": "https://vet.osu.edu/vmc/"
			}]
		}, {
			"id": "326",
			"name": "Veterinary Medicine Academic",
			"latitude": "39.99952908",
			"longitude": "-83.02660826",
			"address": "1900 Coffey Rd",
			"buildingCode": "VM",
			"buildingNumber": "136",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=136&size=mobile&nodefault=1",
			"categories": [{
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/vetmed/'>Veterinary Medicine Library</a><br>229 Sisson Hall<br>1900 Coffey Road<br>292-6107"
			}, {
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dining/dininglocation.asp?franchise=6'>The Campus Grind</a></strong><br>Coffee, bagels, soup, salads and sandwiches</p>"
			}, {
				"name": "Lactation Room",
				"info": "Room 165 (Dean's suite), contact Kristi Pyke at 614-292-3638"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Veterinary Medicine Administration",
				"url": "https://vet.osu.edu/clinical-sciences/departmental-administration"
			}, {
				"name": "Veterinary Medicine Library",
				"url": "https://library.osu.edu/locations/vetmed"
			}, {
				"name": "Veterinary Biosciences",
				"url": "https://vet.osu.edu/biosciences"
			}, {
				"name": "Veterinary Clinical Sciences ",
				"url": "https://vet.osu.edu/clinical-sciences"
			}, {
				"name": "Veterinary Preventive Medicine ",
				"url": "https://vet.osu.edu/preventive-medicine"
			}]
		}, {
			"id": "328",
			"name": "Waterman - Laboratory Headquarters",
			"latitude": "40.010336",
			"longitude": "-83.04005196",
			"address": "2490 Carmack Rd",
			"buildingCode": null,
			"buildingNumber": "179",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=179&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "330",
			"name": "Watts Hall",
			"latitude": "40.00347358",
			"longitude": "-83.0112612",
			"address": "2041 College Rd",
			"buildingCode": "WA",
			"buildingNumber": "107",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=107&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Department of Materials Science and Engineering",
				"url": "https://mse.osu.edu/"
			}]
		}, {
			"id": "331",
			"name": "Weigel Hall",
			"latitude": "40.000686",
			"longitude": "-83.0098319",
			"address": "1866 College Rd",
			"buildingCode": "WG",
			"buildingNumber": "355",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=355&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "School of Music",
				"url": "https://music.osu.edu/"
			}]
		}, {
			"id": "332",
			"name": "Wexner Center for the Arts",
			"latitude": "40.00082115",
			"longitude": "-83.00948504",
			"address": "1871 N High St",
			"buildingCode": "WX",
			"buildingNumber": "386",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=386&size=mobile&nodefault=1",
			"categories": [{
				"name": "Art",
				"info": ""
			}, {
				"name": "Library",
				"info": "<a href='http://library.osu.edu/sites/finearts/'>Fine Arts Library</a><br>035L Wexner Center<br>27 West 17th Avenue Mall<br>292-6184"
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,"
			}],
			"departments": [{
				"name": "Fine Arts Library",
				"url": "https://library.osu.edu/locations/finearts"
			}, {
				"name": "Wexner Center for the Arts",
				"url": "https://www.wexarts.org/"
			}]
		}, {
			"id": "333",
			"name": "Wilce Student Health Center",
			"latitude": "39.99958173",
			"longitude": "-83.01642728",
			"address": "1875 Millikin Rd",
			"buildingCode": null,
			"buildingNumber": "294",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=294&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": "Wilce Student Health Center"
			}, {
				"name": "Student Services",
				"info": "A Joint Commission accredited outpatient facility providing a variety of health care services to the student population."
			}, {
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Student Health Services",
				"url": "http://shs.osu.edu/"
			}]
		}, {
			"id": "334",
			"name": "Wiseman Hall",
			"latitude": "39.99665128",
			"longitude": "-83.01806205",
			"address": "400 W 12th Ave",
			"buildingCode": "WM",
			"buildingNumber": "157",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=157&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Laboratory Animal Resources",
				"url": "http://ular.osu.edu/"
			}]
		}, {
			"id": "335",
			"name": "Women's Field House",
			"latitude": "39.99810491",
			"longitude": "-83.02107561",
			"address": "1790 Cannon Dr",
			"buildingCode": null,
			"buildingNumber": "029",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=029&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "336",
			"name": "Woody Hayes Athletic Center",
			"latitude": "40.01239261",
			"longitude": "-83.02438206",
			"address": "535 Irving Schottenstein Dr",
			"buildingCode": "WD",
			"buildingNumber": "270",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=270&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "337",
			"name": "William Hall Complex - Worthington Building",
			"latitude": "39.9939961",
			"longitude": "-83.01251588",
			"address": "203 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "849",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=849&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}, {
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Worthington Building Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/worthington-building"
			}]
		}, {
			"id": "338",
			"name": "Bruegger's Bagels",
			"latitude": "39.99461802",
			"longitude": "-83.01421521",
			"address": "1630 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "872",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=872&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "339",
			"name": "Younkin Success Center",
			"latitude": "39.99483229",
			"longitude": "-83.01412854",
			"address": "1640 Neil Ave",
			"buildingCode": "YN",
			"buildingNumber": "052",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=052&size=mobile&nodefault=1",
			"categories": [{
				"name": "Student Services",
				"info": "Counseling and consultation to currently enrolled undergraduate, graduate and professional students. Main office: 4th floor of the Younkin Success Center at 1640 Neil Avenue."
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Counseling and Consultation Services",
				"url": "https://ccs.osu.edu/"
			}, {
				"name": " Career Counseling and Support Services",
				"url": "http://ccss.osu.edu/"
			}, {
				"name": "Younkin Success Center",
				"url": "http://younkinsuccess.osu.edu//"
			}, {
				"name": "Student-Athlete Support Service Office",
				"url": "http://younkinsuccess.osu.edu/about-us/departments/student-athlete-support-services/"
			}, {
				"name": "University Center for the Advancement of Teaching",
				"url": "https://ucat.osu.edu/"
			}, {
				"name": "Dennis Learning Center",
				"url": "http://dennislearningcenter.osu.edu/"
			}]
		}, {
			"id": "340",
			"name": "Zoology Research Laboratory",
			"latitude": "40.00045286",
			"longitude": "-83.04350089",
			"address": "1292 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "231",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=231&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "685",
			"name": "Institute for Behavioral Medicine Research",
			"latitude": "39.99287527",
			"longitude": "-83.01880099",
			"address": "460 Medical Center Dr",
			"buildingCode": null,
			"buildingNumber": "878",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=878&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Institute for Behavioral Medicine Research",
				"url": "https://wexnermedical.osu.edu/neurological-institute/departments-and-centers/research-centers/institute-for-behavioral-medicine-research"
			}]
		}, {
			"id": "688",
			"name": "Science Village",
			"latitude": "39.9979843",
			"longitude": "-83.04574968",
			"address": "1381 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "974",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=974&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Nanotech West Laboratory",
				"url": "https://nanotech.osu.edu/"
			}, {
				"name": "Institute for Materials Research - West Campus Office",
				"url": "http://imr.osu.edu/"
			}]
		}, {
			"id": "689",
			"name": "Psychology Building",
			"latitude": "39.99852017",
			"longitude": "-83.01626613",
			"address": "1835 Neil Ave",
			"buildingCode": "PS",
			"buildingNumber": "144",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=144&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,"
			}],
			"departments": [{
				"name": "Psychology",
				"url": "https://psychology.osu.edu/"
			}, {
				"name": "Center for Cognitive and Behavioral Brain Imaging (CCBBI)",
				"url": "http://ccbbi.osu.edu/"
			}]
		}, {
			"id": "690",
			"name": "Biomedical Research Tower",
			"latitude": "39.99651244",
			"longitude": "-83.0193251",
			"address": "460 W 12th Ave",
			"buildingCode": "BT",
			"buildingNumber": "112",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=112&size=mobile&nodefault=1",
			"categories": [{
				"name": "Medical",
				"info": ""
			}],
			"departments": [{
				"name": "Center for Microbial Interface Biology ",
				"url": "https://cmib.osu.edu/"
			}, {
				"name": "Campus Chemical Instrument Center",
				"url": "http://www.ccic.ohio-state.edu/"
			}]
		}, {
			"id": "692",
			"name": "Scott Laboratory",
			"latitude": "40.00231227",
			"longitude": "-83.01417566",
			"address": "201 W 19th Ave",
			"buildingCode": "SO",
			"buildingNumber": "148",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=148&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,05,"
			}],
			"departments": [{
				"name": "Department of Mechanical and Aerospace Engineering",
				"url": "https://mae.osu.edu"
			}]
		}, {
			"id": "693",
			"name": "Kinnear Rd, 1165",
			"latitude": "39.99741933",
			"longitude": "-83.03946659",
			"address": "1165 Kinnear Rd",
			"buildingCode": "LT",
			"buildingNumber": "932",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=932&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "694",
			"name": "Gateway C",
			"latitude": "39.99438927",
			"longitude": "-83.0062499",
			"address": "1590 N High St",
			"buildingCode": null,
			"buildingNumber": "863",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=863&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "4th floor, contact Katie Purcell 292-0583"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,04,05,"
			}, {
				"name": "Books",
				"info": "<a href=\"http://ohiostate.bncollege.com/\">Ohio State University Bookstore</a>"
			}],
			"departments": [{
				"name": "Office of Legal Affairs",
				"url": "https://legal.osu.edu/"
			}, {
				"name": "Campus Gateway Barnes & Noble",
				"url": "https://ohiostate.bncollege.com/webapp/wcs/stores/servlet/BNCBHomePage?storeId=33552&catalogId=10001&langId=-1"
			}, {
				"name": "Human Resources",
				"url": "https://hr.osu.edu/"
			}]
		}, {
			"id": "695",
			"name": "Community Extension Center",
			"latitude": "39.97090844",
			"longitude": "-82.97783576",
			"address": "905 Mt Vernon Ave",
			"buildingCode": "CX",
			"buildingNumber": "380",
			"zipCode": "43203",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=380&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "696",
			"name": "Parking Garage - Gateway E",
			"latitude": "39.99405868",
			"longitude": "-83.00520016",
			"address": "75 E 11th Ave",
			"buildingCode": null,
			"buildingNumber": "866",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=866&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "697",
			"name": "Browning Amphitheater",
			"latitude": "39.99780230823386",
			"longitude": "-83.01351070404053",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "200888",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200888&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "698",
			"name": "Mirror Lake",
			"latitude": "39.99763792744076",
			"longitude": "-83.01458358764648",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "200602",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200602&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "Historic, scenic Mirror Lake"
			}],
			"departments": []
		}, {
			"id": "699",
			"name": "Physical Activity and Education Services - PAES",
			"latitude": "39.99983294",
			"longitude": "-83.01723863",
			"address": "305 Annie & John Glenn Ave",
			"buildingCode": "PE",
			"buildingNumber": "245",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=245&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: G,01,02,03,04,"
			}],
			"departments": []
		}, {
			"id": "700",
			"name": "The Oval",
			"latitude": "39.999446094401534",
			"longitude": "-83.01239490509033",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "200605",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200605&size=mobile&nodefault=1",
			"categories": [{
				"name": "Interest",
				"info": "The historic Oval"
			}],
			"departments": []
		}, {
			"id": "701",
			"name": "University Plaza Hotel",
			"latitude": "40.024788267413584",
			"longitude": "-83.02608489990234",
			"address": "3110 Olentangy River Rd, Columbus, OH 43202",
			"buildingCode": null,
			"buildingNumber": "200603",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200603&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lodging",
				"info": "Plaza hotel"
			}],
			"departments": []
		}, {
			"id": "704",
			"name": "Chadwick Arboretum",
			"latitude": "40.006119459786355",
			"longitude": "-83.02561283111572",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "200607",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200607&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "708",
			"name": "Highland St, 1615",
			"latitude": "39.99478552",
			"longitude": "-83.01111431",
			"address": "1615 Highland St",
			"buildingCode": null,
			"buildingNumber": "927",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=927&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "709",
			"name": "Center of Science and Industry - COSI",
			"latitude": "39.95959529",
			"longitude": "-83.0066951",
			"address": "333 W Broad St",
			"buildingCode": null,
			"buildingNumber": "934",
			"zipCode": "43215",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=934&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 1M,"
			}],
			"departments": [{
				"name": "WOSU at COSI",
				"url": "https://www.wosu.org/archive/wosuatcosi/index.php"
			}]
		}, {
			"id": "710",
			"name": "Campus Shop",
			"latitude": "40.01006119",
			"longitude": "-83.03457019",
			"address": "2469 Wood Ave",
			"buildingCode": null,
			"buildingNumber": "987",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=987&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "711",
			"name": "Peach Point - Shop",
			"latitude": "41.65842091",
			"longitude": "-82.82676166",
			"address": "360 West Shore Blvd",
			"buildingCode": null,
			"buildingNumber": "989",
			"zipCode": "43456",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=989&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "713",
			"name": "4-H Center",
			"latitude": "40.00789332",
			"longitude": "-83.02851216",
			"address": "2201 Fred Taylor Dr",
			"buildingCode": "FO",
			"buildingNumber": "191",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=191&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: B,01,02,03,04,"
			}],
			"departments": [{
				"name": "Ohio 4-H Youth Development",
				"url": "https://ohio4h.org"
			}]
		}, {
			"id": "714",
			"name": "Twelfth Ave, 395 W",
			"latitude": "39.99594271",
			"longitude": "-83.01792301",
			"address": "395 W 12th Ave",
			"buildingCode": null,
			"buildingNumber": "356",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=356&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Department of Neurology",
				"url": "https://wexnermedical.osu.edu/neurological-institute/departments-and-centers/departments/department-neurology"
			}, {
				"name": "Department of Radiology",
				"url": "https://wexnermedical.osu.edu/departments/radiology"
			}, {
				"name": "Department of Surgery",
				"url": "https://wexnermedical.osu.edu/departments/surgery"
			}, {
				"name": "Department of Internal Medicine",
				"url": "https://wexnermedical.osu.edu/departments/internal-medicine"
			}, {
				"name": "Division of Gastroenterology, Hepatology and Nutrition",
				"url": "https://wexnermedical.osu.edu/departments/internal-medicine/gastroenterology"
			}, {
				"name": "Division of Nephrology",
				"url": "https://wexnermedical.osu.edu/departments/internal-medicine/nephrology"
			}]
		}, {
			"id": "715",
			"name": "Wetland Bike Shelter",
			"latitude": "40.02071982",
			"longitude": "-83.01725697",
			"address": "352 W Dodridge St",
			"buildingCode": null,
			"buildingNumber": "210",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=210&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "717",
			"name": "Fisher Commons",
			"latitude": "40.006020843371516",
			"longitude": "-83.03363800048828",
			"address": "Lane Ave and Kenny Rd",
			"buildingCode": null,
			"buildingNumber": "200896",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=200896&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "719",
			"name": "Schoenbaum Family Center",
			"latitude": "39.98950809",
			"longitude": "-83.00142636",
			"address": "175 E 7th Ave",
			"buildingCode": "SF",
			"buildingNumber": "933",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=933&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": [{
				"name": "Schoenbaum Family Center and Crane Center for Early Childhood Research and Policy (CCED)",
				"url": "https://earlychildhood.ehe.osu.edu/"
			}]
		}, {
			"id": "723",
			"name": "Dodridge St, 250 W",
			"latitude": "40.01672107",
			"longitude": "-83.01893882",
			"address": "250 W Dodridge St",
			"buildingCode": null,
			"buildingNumber": "985",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=985&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "731",
			"name": "Lane Ave, 1480 W",
			"latitude": "40.00723304",
			"longitude": "-83.04952958",
			"address": "1480 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "898",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=898&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "University Advancement",
				"url": "https://advancement.osu.edu/"
			}, {
				"name": "The Ohio State University Foundation ",
				"url": "https://www.osu.edu/giving/"
			}, {
				"name": "University Marketing",
				"url": "https://universitymarketing.osu.edu/"
			}]
		}, {
			"id": "733",
			"name": "Phi Kappa Tau Fraternity",
			"latitude": "39.99956764",
			"longitude": "-83.00409281",
			"address": "141 E 15th Ave",
			"buildingCode": null,
			"buildingNumber": "855",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=855&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "737",
			"name": "Parking Garage - Ohio Union South",
			"latitude": "39.99835062",
			"longitude": "-83.0088335",
			"address": "1759 N High St",
			"buildingCode": null,
			"buildingNumber": "162",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=162&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "743",
			"name": "Buckeye Field",
			"latitude": "40.01172144",
			"longitude": "-83.0264057",
			"address": "2410 Fred Taylor Dr",
			"buildingCode": null,
			"buildingNumber": "108",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=108&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": [{
				"name": "Athletics",
				"url": "http://www.ohiostatebuckeyes.com/"
			}]
		}, {
			"id": "745",
			"name": "Parking Garage - Ninth Ave E",
			"latitude": "39.99297309",
			"longitude": "-83.01557041",
			"address": "345 W 9th Ave",
			"buildingCode": null,
			"buildingNumber": "875",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=875&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "747",
			"name": "Student Academic Services",
			"latitude": "40.00601254",
			"longitude": "-83.01612716",
			"address": "281 W Lane Ave",
			"buildingCode": "SA",
			"buildingNumber": "160",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=160&size=mobile&nodefault=1",
			"categories": [{
				"name": "Admissions",
				"info": "<a href='http://scsc.osu.edu/'>Student Service Center</a>"
			}, {
				"name": "Registrar",
				"info": "<a href='http://registrar.osu.edu/'>Registrar website</a>"
			}, {
				"name": "Student Services",
				"info": "Provides service for: Student Financial Aid, University Bursar, University Registrar"
			}, {
				"name": "Student Services",
				"info": "A full range of veteran's support services."
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,03,04,05,06,,"
			}],
			"departments": [{
				"name": "Undergraduate Admissions",
				"url": "http://undergrad.osu.edu/"
			}, {
				"name": "Enrollment Services",
				"url": "http://enrollmentservices.osu.edu/"
			}, {
				"name": "International Undergraduate Admissions",
				"url": "http://undergrad.osu.edu/"
			}, {
				"name": "Campus Broadcast Studio ",
				"url": "https://news.osu.edu/"
			}, {
				"name": "Office of Student Financial Aid",
				"url": "http://sfa.osu.edu/"
			}, {
				"name": "Office of the University Registrar",
				"url": "http://registrar.osu.edu/"
			}, {
				"name": "Office of Graduate and Professional Admissions",
				"url": "http://gpadmissions.osu.edu/"
			}, {
				"name": "Buckeye Link",
				"url": "http://contactbuckeyelink.osu.edu/"
			}, {
				"name": "Testing Center",
				"url": "http://registrar.osu.edu/testing/index.asp"
			}, {
				"name": "Office of Military &amp; Veterans Services",
				"url": "http://veterans.osu.edu/"
			}, {
				"name": "Undergraduate Fellowship Office",
				"url": "https://honors-scholars.osu.edu/fellowship-office/"
			}, {
				"name": "Honors and Scholars Center",
				"url": "https://honors-scholars.osu.edu/"
			}]
		}, {
			"id": "749",
			"name": "Parking Garage - Lane Ave",
			"latitude": "40.00561224",
			"longitude": "-83.01617021",
			"address": "2105 Neil Ave",
			"buildingCode": null,
			"buildingNumber": "159",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=159&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "751",
			"name": "Kinnear Rd, 760",
			"latitude": "39.99802775",
			"longitude": "-83.02913414",
			"address": "760 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "963",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=963&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "753",
			"name": "Lawrence Tower",
			"latitude": "40.00724257",
			"longitude": "-83.01858715",
			"address": "328 W Lane Ave",
			"buildingCode": "LA",
			"buildingNumber": "891",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=891&size=mobile&nodefault=1",
			"categories": [{
				"name": "Food",
				"info": "<p><strong><a href='http://diningservices.osu.edu/dinin/dininglocation.asp?franchise=34'>Cafeteria Dining</a></strong><br>Traditional cafeteria-style dining.</p>"
			}],
			"departments": [{
				"name": "The PAD",
				"url": "https://dining.osu.edu/dininglocations/the-pad/"
			}, {
				"name": "Lawrence Tower Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/lawrence-tower"
			}]
		}, {
			"id": "755",
			"name": "Parking Garage - W Lane Ave",
			"latitude": "40.00720963",
			"longitude": "-83.01796821",
			"address": "328 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "892",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=892&size=mobile&nodefault=1",
			"categories": [{
				"name": "Parking",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "757",
			"name": "Urban Arts Space",
			"latitude": "39.95929282",
			"longitude": "-83.0010575",
			"address": "50 W Town St, Suite 130",
			"buildingCode": null,
			"buildingNumber": "991",
			"zipCode": "43215",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=991&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "763",
			"name": "Airport Dr, 2740",
			"latitude": "39.99674521",
			"longitude": "-82.9350381",
			"address": "2740 Airport Dr",
			"buildingCode": null,
			"buildingNumber": "955",
			"zipCode": "43219",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=955&size=mobile&nodefault=1",
			"categories": [{
				"name": "Lactation Room",
				"info": "Room 238, reserve through OCIO calendar"
			}, {
				"name": "Wireless",
				"info": "Floors: 01,02,"
			}],
			"departments": [{
				"name": "Office of the Chief Information Officer",
				"url": "http://cio.osu.edu"
			}]
		}, {
			"id": "765",
			"name": "Aerospace Research Center",
			"latitude": "40.07415025",
			"longitude": "-83.07916909",
			"address": "2300 W Case Rd",
			"buildingCode": "AA",
			"buildingNumber": "199",
			"zipCode": "43235",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=199&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "767",
			"name": "Fred Beekman Park",
			"latitude": "40.005084",
			"longitude": "-83.037324",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "201201",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=201201&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "769",
			"name": "Jesse Owens West Park",
			"latitude": "40.002404",
			"longitude": "-83.035243",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "201202",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=201202&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "771",
			"name": "Lincoln Tower Park",
			"latitude": "39.998837",
			"longitude": "-83.020019",
			"address": null,
			"buildingCode": null,
			"buildingNumber": "201203",
			"zipCode": null,
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=201203&size=mobile&nodefault=1",
			"categories": [{
				"name": "Recreation",
				"info": ""
			}],
			"departments": []
		}, {
			"id": "773",
			"name": "Smith-Steeb Hall",
			"latitude": "39.99578145",
			"longitude": "-83.00948664",
			"address": "80 W 11th Ave",
			"buildingCode": null,
			"buildingNumber": "852",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=852&size=mobile&nodefault=1",
			"categories": [{
				"name": "Housing",
				"info": ""
			}],
			"departments": [{
				"name": "Smith-Steeb Hall Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/smith-steeb-hall"
			}]
		}, {
			"id": "777",
			"name": "Ackerman Rd, 690 - Shelter House",
			"latitude": "40.01945464",
			"longitude": "-83.03127181",
			"address": "690 Ackerman Rd",
			"buildingCode": null,
			"buildingNumber": "2442",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2442&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "781",
			"name": "Gateway B",
			"latitude": "39.99524398",
			"longitude": "-83.00666945",
			"address": "1620 N High St",
			"buildingCode": null,
			"buildingNumber": "862",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=862&size=mobile&nodefault=1",
			"categories": [{
				"name": "Student Services",
				"info": "A non-profit law office employing legal professionals to provide advice, representation, education, and resources to eligible Ohio State students regarding a wide range of legal issues."
			}],
			"departments": []
		}, {
			"id": "783",
			"name": "Kinnear Rd, 1245-1255",
			"latitude": "39.99714962",
			"longitude": "-83.04122407",
			"address": "1245 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "1260",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1260&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "785",
			"name": "Residences on Tenth",
			"latitude": "39.9945947",
			"longitude": "-83.01292946",
			"address": "230 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "850",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=850&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "The Residence on Tenth Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/the-residence-on-tenth"
			}]
		}, {
			"id": "787",
			"name": "Gateway D",
			"latitude": "39.99378009",
			"longitude": "-83.00620601",
			"address": "1550 N High St",
			"buildingCode": "GW",
			"buildingNumber": "865",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=865&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "789",
			"name": "Airport Administration",
			"latitude": "40.07444052",
			"longitude": "-83.07496343",
			"address": "2160 W Case Rd",
			"buildingCode": null,
			"buildingNumber": "021",
			"zipCode": "43235",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=021&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "791",
			"name": "Airport Operations",
			"latitude": "40.07526637",
			"longitude": "-83.07562747",
			"address": "2160 W Case Rd",
			"buildingCode": "AO",
			"buildingNumber": "031",
			"zipCode": "43235",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=031&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "793",
			"name": "Kepler Club House",
			"latitude": "40.0318604",
			"longitude": "-83.0530493",
			"address": "3605 Tremont Rd",
			"buildingCode": null,
			"buildingNumber": "033",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=033&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": []
		}, {
			"id": "799",
			"name": "Flight Laboratory",
			"latitude": "40.075157",
			"longitude": "-83.07405994",
			"address": "2160 W Case Rd",
			"buildingCode": null,
			"buildingNumber": "235",
			"zipCode": "43235",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=235&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "801",
			"name": "Gateway A",
			"latitude": "39.99466684",
			"longitude": "-83.00735996",
			"address": "1595 N High St",
			"buildingCode": null,
			"buildingNumber": "860",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=860&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": []
		}, {
			"id": "803",
			"name": "Gateway F - North",
			"latitude": "39.99455295",
			"longitude": "-83.00525888",
			"address": "43-71 E 11th Ave",
			"buildingCode": null,
			"buildingNumber": "867",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=867&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "805",
			"name": "Gateway F - South",
			"latitude": "39.9935652",
			"longitude": "-83.00516118",
			"address": "42-68 E 9th Ave",
			"buildingCode": null,
			"buildingNumber": "868",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=868&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "809",
			"name": "Ackerman Rd, 700",
			"latitude": "40.01975019",
			"longitude": "-83.03312134",
			"address": "700 Ackerman Rd",
			"buildingCode": null,
			"buildingNumber": "921",
			"zipCode": "43202",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=921&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "811",
			"name": "Steelwood Athletic Training Facility",
			"latitude": "39.99600783",
			"longitude": "-83.03836571",
			"address": "1160 Steelwood Rd",
			"buildingCode": null,
			"buildingNumber": "944",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=944&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 01,"
			}],
			"departments": []
		}, {
			"id": "813",
			"name": "Knight House",
			"latitude": "40.00023807",
			"longitude": "-83.00511826",
			"address": "104 E 15th Ave",
			"buildingCode": null,
			"buildingNumber": "961",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=961&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "815",
			"name": "OSU Center for Human Resource Research",
			"latitude": "40.01913503",
			"longitude": "-83.03661305",
			"address": "921 Chatham Ln",
			"buildingCode": null,
			"buildingNumber": "967",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=967&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "817",
			"name": "ElectroScience Laboratory Complex",
			"latitude": "39.99890708",
			"longitude": "-83.04512908",
			"address": "1320-1330 Kinnear Rd",
			"buildingCode": null,
			"buildingNumber": "977",
			"zipCode": "43212",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=977&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "819",
			"name": "CBEC",
			"latitude": "40.00342244",
			"longitude": "-83.0134007",
			"address": "151 W Woodruff Ave",
			"buildingCode": "CB",
			"buildingNumber": "248",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=248&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "William G. Lowrie Department of Chemical and Biomolecular Engineering",
				"url": "https://cbe.osu.edu/"
			}]
		}, {
			"id": "821",
			"name": "CampusParc",
			"latitude": "39.994085",
			"longitude": "-83.005830",
			"address": "South Campus Gateway, 1560 North High Street",
			"buildingCode": null,
			"buildingNumber": "201501",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=201501&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "823",
			"name": "James Cancer Hospital",
			"latitude": "39.99495612",
			"longitude": "-83.01966815",
			"address": "460 W 10th Ave",
			"buildingCode": null,
			"buildingNumber": "375",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=375&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Comprehensive Cancer Center",
				"url": "https://cancer.osu.edu/"
			}]
		}, {
			"id": "825",
			"name": "Curl Hall",
			"latitude": "40.00428073",
			"longitude": "-83.01095109",
			"address": "80 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "1106",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1106&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Curl Market ",
				"url": "https://dining.osu.edu/dininglocations/curl-market/"
			}]
		}, {
			"id": "827",
			"name": "Torres House",
			"latitude": "40.0059512",
			"longitude": "-83.01365501",
			"address": "187 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "1101",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1101&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Torres House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/torres-house"
			}]
		}, {
			"id": "829",
			"name": "Raney House",
			"latitude": "40.00547485",
			"longitude": "-83.01002933",
			"address": "33 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "1103",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1103&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Raney House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/raney-house"
			}]
		}, {
			"id": "831",
			"name": "Bowen House",
			"latitude": "40.00536354",
			"longitude": "-83.00942096",
			"address": "2125 N High St",
			"buildingCode": null,
			"buildingNumber": "1104",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1104&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Bowen House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/bowen-house"
			}]
		}, {
			"id": "835",
			"name": "Scott House",
			"latitude": "40.00438504",
			"longitude": "-83.01338547",
			"address": "160 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "1108",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1108&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Scott C-Store",
				"url": "https://dining.osu.edu/dininglocations/convenience-store/"
			}, {
				"name": "Connecting Grounds",
				"url": "https://dining.osu.edu/dininglocations/connecting-grounds/"
			}, {
				"name": "Traditions at Scott",
				"url": "https://dining.osu.edu/dininglocations/traditions-dining/"
			}, {
				"name": "Scott House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/scott-house"
			}]
		}, {
			"id": "837",
			"name": "Adena Hall",
			"latitude": "40.07003307",
			"longitude": "-82.44582285",
			"address": "1159 University Dr",
			"buildingCode": "AD",
			"buildingNumber": "658",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=658&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Gym",
				"url": ""
			}, {
				"name": "Weight Room",
				"url": ""
			}, {
				"name": "Basketball courts",
				"url": ""
			}]
		}, {
			"id": "839",
			"name": "Founders Hall",
			"latitude": "40.06938693",
			"longitude": "-82.44751035",
			"address": "1179 University Dr",
			"buildingCode": "FH",
			"buildingNumber": "628",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=628&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Academic/Advising Offices",
				"url": ""
			}, {
				"name": "Office of President, COTC",
				"url": ""
			}, {
				"name": "Office of Dean/Director, Ohio State Newark",
				"url": ""
			}, {
				"name": "Biology",
				"url": ""
			}, {
				"name": "Psychology research lab",
				"url": ""
			}, {
				"name": "Services Center",
				"url": ""
			}, {
				"name": "Chemistry",
				"url": ""
			}, {
				"name": "Physics",
				"url": ""
			}, {
				"name": "Anatomy",
				"url": ""
			}, {
				"name": "Lost and Found",
				"url": ""
			}, {
				"name": "Computer lab",
				"url": ""
			}]
		}, {
			"id": "841",
			"name": "Hopewell Hall",
			"latitude": "40.06833966",
			"longitude": "-82.44787606",
			"address": "1189 University Dr",
			"buildingCode": "HP",
			"buildingNumber": "657",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=657&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Financial Aid",
				"url": ""
			}, {
				"name": "Fees & Deposits",
				"url": ""
			}, {
				"name": "Education Curriculum Center (ECC)",
				"url": ""
			}, {
				"name": "English",
				"url": ""
			}, {
				"name": "Education ",
				"url": ""
			}, {
				"name": "Economics",
				"url": ""
			}, {
				"name": "Math",
				"url": ""
			}, {
				"name": "Nursing",
				"url": ""
			}, {
				"name": "Testing Center ",
				"url": ""
			}, {
				"name": "Marketing & Public Relations",
				"url": ""
			}]
		}, {
			"id": "843",
			"name": "Warner Library and Student Center",
			"latitude": "40.06891305",
			"longitude": "-82.44476878",
			"address": "1219 University Dr",
			"buildingCode": "WC",
			"buildingNumber": "583",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=583&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Library",
				"url": ""
			}, {
				"name": "Table of Contents (Dining)",
				"url": "https://newark.osu.edu/students/student-life/campus-dining/table-of-contents.html"
			}, {
				"name": "Bean Counter (Coffee shop)",
				"url": "https://newark.osu.edu/students/student-life/campus-dining/table-of-contents.html"
			}, {
				"name": "Student Life",
				"url": ""
			}, {
				"name": "Computer Labs",
				"url": ""
			}, {
				"name": "Academic Support Services",
				"url": ""
			}, {
				"name": "Math Center",
				"url": ""
			}, {
				"name": "Writing lab",
				"url": ""
			}]
		}, {
			"id": "845",
			"name": "COTC - LeFevre Hall",
			"latitude": "40.06705871",
			"longitude": "-82.4468219",
			"address": "1199 University Dr",
			"buildingCode": "LF",
			"buildingNumber": "676",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=676&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Visual Performing Art",
				"url": ""
			}, {
				"name": "Music",
				"url": ""
			}, {
				"name": "Art",
				"url": ""
			}, {
				"name": "Architecture",
				"url": ""
			}, {
				"name": "Anthropology",
				"url": ""
			}, {
				"name": "Computer Sciences",
				"url": ""
			}, {
				"name": "Black Box Theatre",
				"url": ""
			}, {
				"name": "Faculty Offices",
				"url": ""
			}]
		}, {
			"id": "847",
			"name": "Reese Center",
			"latitude": "40.06768987",
			"longitude": "-82.44539572",
			"address": "1209 University Dr",
			"buildingCode": "RS",
			"buildingNumber": "585",
			"zipCode": "43055",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=585&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Computer Labs",
				"url": ""
			}, {
				"name": "Cyber Café",
				"url": ""
			}, {
				"name": "Auditorium",
				"url": ""
			}, {
				"name": "Political Science",
				"url": ""
			}, {
				"name": "German",
				"url": ""
			}, {
				"name": "Humanities",
				"url": ""
			}, {
				"name": "Executive Board Room",
				"url": ""
			}]
		}, {
			"id": "849",
			"name": "Houston House",
			"latitude": "40.00580503",
			"longitude": "-83.01166471",
			"address": "97 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "1102",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1102&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Houston House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/houston-house"
			}]
		}, {
			"id": "851",
			"name": "Blackburn House",
			"latitude": "40.00411991",
			"longitude": "-83.01256046",
			"address": "136 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "1107",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1107&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Blackburn House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/blackburn-house"
			}]
		}, {
			"id": "853",
			"name": "Busch House",
			"latitude": "40.00475441",
			"longitude": "-83.00929663",
			"address": "2115 N High St",
			"buildingCode": null,
			"buildingNumber": "1105",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1105&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Busch House Residence Hall",
				"url": "https://housing.osu.edu/roomsearch/busch-house"
			}]
		}, {
			"id": "855",
			"name": "Nosker House",
			"latitude": "40.00484522",
			"longitude": "-83.01210824",
			"address": "124 W Woodruff Ave",
			"buildingCode": null,
			"buildingNumber": "1110",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1110&size=mobile&nodefault=1",
			"categories": [],
			"departments": [{
				"name": "Nosker House Residence Hall ",
				"url": "https://housing.osu.edu/roomsearch/nosker-house"
			}]
		}, {
			"id": "857",
			"name": "North Recreation Center",
			"latitude": "40.00528535",
			"longitude": "-83.01277456",
			"address": "149 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "1109",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1109&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "859",
			"name": "Research Services Building",
			"latitude": "40.77987216",
			"longitude": "-81.93023428",
			"address": "1617 Payne Dr",
			"buildingCode": null,
			"buildingNumber": "549",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=549&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "861",
			"name": "Shisler Center for Education and Economic Development",
			"latitude": "40.77916942",
			"longitude": "-81.92758966",
			"address": "1625 Wilson Rd",
			"buildingCode": null,
			"buildingNumber": "679",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=679&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "863",
			"name": "Barnhardt Rice House",
			"latitude": "40.78225991",
			"longitude": "-81.920436",
			"address": "2055 Williams Rd",
			"buildingCode": null,
			"buildingNumber": "487",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=487&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "865",
			"name": "Beef Research Center",
			"latitude": "40.72719554",
			"longitude": "-81.90030757",
			"address": "6491 Fredericksburg Rd",
			"buildingCode": null,
			"buildingNumber": "458",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=458&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "867",
			"name": "Anaerobic Digester Plant",
			"latitude": "40.78506028",
			"longitude": "-81.92052235",
			"address": "2072 Secrest Rd",
			"buildingCode": null,
			"buildingNumber": "466",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=466&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "869",
			"name": "Compost and Biomass Utility Research Building",
			"latitude": "40.771367",
			"longitude": "-81.9115198",
			"address": "2705 Selby Rd",
			"buildingCode": null,
			"buildingNumber": "467",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=467&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "871",
			"name": "Badger Farm - Barn",
			"latitude": "40.77760917",
			"longitude": "-81.84286469",
			"address": "7286 Ely Rd",
			"buildingCode": null,
			"buildingNumber": "453",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=453&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "873",
			"name": "Edgington Hall",
			"latitude": "40.78340287",
			"longitude": "-81.92818527",
			"address": "1374 Gerlaugh Rd",
			"buildingCode": null,
			"buildingNumber": "438",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=438&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "875",
			"name": "Feedstock Processing Research Facility",
			"latitude": "40.77318314",
			"longitude": "-81.91252066",
			"address": "2605 Selby Rd",
			"buildingCode": null,
			"buildingNumber": "501",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=501&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "877",
			"name": "Fisher Auditorium",
			"latitude": "40.77909463",
			"longitude": "-81.92836005",
			"address": "1680 Madison Ave",
			"buildingCode": "FA",
			"buildingNumber": "403",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=403&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "879",
			"name": "Food Animal Health Research Building",
			"latitude": "40.78409289",
			"longitude": "-81.92641826",
			"address": "1323 Ferguson Dr",
			"buildingCode": "FA",
			"buildingNumber": "547",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=547&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "881",
			"name": "Food Agriculture and Biological Engineering",
			"latitude": "40.78148489",
			"longitude": "-81.92620088",
			"address": "1717 Thorne Rd",
			"buildingCode": null,
			"buildingNumber": "9401",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=9401&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "883",
			"name": "Gerlaugh Hall",
			"latitude": "40.78295866",
			"longitude": "-81.92795318",
			"address": "1606 Williams Rd",
			"buildingCode": "GH",
			"buildingNumber": "404",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=404&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "885",
			"name": "Gourley Hall",
			"latitude": "40.78160973",
			"longitude": "-81.92894157",
			"address": "1551 Gerlaugh Dr",
			"buildingCode": "GO",
			"buildingNumber": "405",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=405&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "887",
			"name": "Apple Creek - Land Laboratory Barn",
			"latitude": "40.75484087",
			"longitude": "-81.85879207",
			"address": "6197 Dover Rd",
			"buildingCode": "LD",
			"buildingNumber": "667",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=667&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "889",
			"name": "Hawk's Nest Golf Club - Hawkins Clubhouse",
			"latitude": "40.91685833",
			"longitude": "-81.90897225",
			"address": "2800 E Pleasant Home Rd",
			"buildingCode": "GC",
			"buildingNumber": "664",
			"zipCode": "44217",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=664&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "891",
			"name": "Hayden Hall",
			"latitude": "40.78316479",
			"longitude": "-81.92855591",
			"address": "1391 Gerlaugh Rd",
			"buildingCode": null,
			"buildingNumber": "406",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=406&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "893",
			"name": "Japanese Beetle Laboratory",
			"latitude": "40.78360459",
			"longitude": "-81.92820093",
			"address": "1356 Gerlaugh Rd",
			"buildingCode": null,
			"buildingNumber": "440",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=440&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "895",
			"name": "Krauss Dairy Research Facility",
			"latitude": "40.77230331",
			"longitude": "-81.90453202",
			"address": "2254 Oil City Rd",
			"buildingCode": null,
			"buildingNumber": "426",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=426&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "897",
			"name": "Meeting House",
			"latitude": "40.7826057140408",
			"longitude": "-81.9307488270664",
			"address": "1423 Station Dr",
			"buildingCode": null,
			"buildingNumber": "9370",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=9370&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "899",
			"name": "Mellinger Farm - Residence House 1",
			"latitude": "40.80473272",
			"longitude": "-82.05565282",
			"address": "6855 W Old Lincoln Way",
			"buildingCode": null,
			"buildingNumber": "9343",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=9343&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "901",
			"name": "Conservatory Greenhouse",
			"latitude": "40.77578006",
			"longitude": "-81.92177366",
			"address": "1950 Garrison Dr",
			"buildingCode": null,
			"buildingNumber": "641",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=641&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "903",
			"name": "Poultry Service Building",
			"latitude": "40.77799692",
			"longitude": "-81.92298054",
			"address": "1745 Gossard Rd",
			"buildingCode": null,
			"buildingNumber": "469",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=469&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "905",
			"name": "Pounden Hall",
			"latitude": "40.78355014",
			"longitude": "-81.9285443",
			"address": "1363 Gerlaugh Dr",
			"buildingCode": null,
			"buildingNumber": "402",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=402&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "909",
			"name": "Plant and Animal Agrosecurity Research Facility",
			"latitude": "40.78352791",
			"longitude": "-81.92610626",
			"address": "1345 Ferguson Dr",
			"buildingCode": null,
			"buildingNumber": "543",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=543&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "911",
			"name": "Research Operations Service Building",
			"latitude": "40.78327929",
			"longitude": "-81.91938324",
			"address": "2122 Williams Rd",
			"buildingCode": null,
			"buildingNumber": "409",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=409&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "915",
			"name": "Simon Rice House",
			"latitude": "40.78249798",
			"longitude": "-81.92524035",
			"address": "1727 Williams Rd",
			"buildingCode": null,
			"buildingNumber": "9118",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=9118&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "917",
			"name": "Selby Hall",
			"latitude": "40.78028137",
			"longitude": "-81.92636324",
			"address": "1716 Wilson Rd",
			"buildingCode": "SY",
			"buildingNumber": "410",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=410&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "919",
			"name": "Sheep Barn 2",
			"latitude": "40.72931063",
			"longitude": "-81.9001368",
			"address": "5743 Fredericksburg Rd",
			"buildingCode": null,
			"buildingNumber": "471",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=471&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "921",
			"name": "Agronomy Service",
			"latitude": "40.76752223",
			"longitude": "-81.91158387",
			"address": "2505 Dover Rd",
			"buildingCode": null,
			"buildingNumber": "425",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=425&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "923",
			"name": "Thorne Hall",
			"latitude": "40.78194591",
			"longitude": "-81.93027112",
			"address": "1465 Campus Dr",
			"buildingCode": "TH",
			"buildingNumber": "412",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=412&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "925",
			"name": "Williams Hall",
			"latitude": "40.78149844",
			"longitude": "-81.92768593",
			"address": "1627 Thorne Dr",
			"buildingCode": "WI",
			"buildingNumber": "414",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=414&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "927",
			"name": "Davis Tower",
			"latitude": "40.004958",
			"longitude": "-83.012943",
			"address": "North Residential Town Square",
			"buildingCode": null,
			"buildingNumber": "1012",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1012&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "931",
			"name": "OSU Internal Medicine and Pediatrics",
			"latitude": null,
			"longitude": null,
			"address": "3691 Ridge Mill Dr",
			"buildingCode": null,
			"buildingNumber": "2501",
			"zipCode": "43026",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2501&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "933",
			"name": "Doric on Lane",
			"latitude": null,
			"longitude": null,
			"address": "150 W Lane Ave",
			"buildingCode": null,
			"buildingNumber": "2563",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2563&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "935",
			"name": "Norwich Flats",
			"latitude": "40.0076581",
			"longitude": "-83.01631222",
			"address": "250 W Norwich Ave",
			"buildingCode": null,
			"buildingNumber": "2564",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2564&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "937",
			"name": "Fisher Commons",
			"latitude": "40.00565084",
			"longitude": "-83.03379149",
			"address": "900 Nettle Dr",
			"buildingCode": null,
			"buildingNumber": "2565",
			"zipCode": "43221",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2565&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "939",
			"name": "Kappa Kappa Gamma House",
			"latitude": "39.99961936",
			"longitude": "-83.00654954",
			"address": "55 E 15th Ave",
			"buildingCode": null,
			"buildingNumber": "2574",
			"zipCode": "43201",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=2574&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "941",
			"name": "Jameson Crane Sports Medicine Institute",
			"latitude": "40.017874428187",
			"longitude": "-83.0319242609926",
			"address": "2835 Fred Taylor Dr",
			"buildingCode": null,
			"buildingNumber": "1004",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=1004&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "943",
			"name": "Administration Building",
			"latitude": "40.78287983",
			"longitude": "-81.93024808",
			"address": "1399 Campus Dr",
			"buildingCode": null,
			"buildingNumber": "400",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=400&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "945",
			"name": "Halterman Hall",
			"latitude": "40.77502486",
			"longitude": "-81.92182451",
			"address": "2055 Garrison Dr",
			"buildingCode": "AT",
			"buildingNumber": "635",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=635&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "947",
			"name": "Skou Hall",
			"latitude": "40.775034",
			"longitude": "-81.92310858",
			"address": "1889 Garrison Dr",
			"buildingCode": "SK",
			"buildingNumber": "643",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=643&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "949",
			"name": "ATI Student Activities Center",
			"latitude": "40.77493591",
			"longitude": "-81.92009013",
			"address": "2101 Gossard Dr",
			"buildingCode": "AC",
			"buildingNumber": "646",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=646&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "951",
			"name": "ATI and OARDC Apartment Village Administration",
			"latitude": "40.77591877",
			"longitude": "-81.92537571",
			"address": "1901 Apple Orchard Dr",
			"buildingCode": null,
			"buildingNumber": "595",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=595&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "953",
			"name": "Apple Creek - Feedlot Barn",
			"latitude": "40.76773898",
			"longitude": "-81.8509284",
			"address": "2653 S Apple Creek Rd",
			"buildingCode": null,
			"buildingNumber": "8116",
			"zipCode": "44606",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=8116&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "955",
			"name": "Apple Creek - Dairy Barn",
			"latitude": "40.77049002",
			"longitude": "-81.85193108",
			"address": "2332 Barnard Rd",
			"buildingCode": null,
			"buildingNumber": "647",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=647&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "957",
			"name": "Apple Creek - Equine Stable",
			"latitude": "40.75897763",
			"longitude": "-81.84469491",
			"address": "3339 S Apple Creek Rd",
			"buildingCode": null,
			"buildingNumber": "590",
			"zipCode": "44606",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=590&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "959",
			"name": "Greenhouse",
			"latitude": "40.77563279",
			"longitude": "-81.92260186",
			"address": "1920 Garrison Dr",
			"buildingCode": null,
			"buildingNumber": "636",
			"zipCode": "44691",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=636&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "963",
			"name": "Maintenance Building",
			"latitude": "40.0022105",
			"longitude": "-83.01753341",
			"address": "2000 Tuttle Park Pl",
			"buildingCode": null,
			"buildingNumber": "078",
			"zipCode": "43210",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=078&size=mobile&nodefault=1",
			"categories": [{
				"name": "Wireless",
				"info": "Floors: 02,"
			}],
			"departments": []
		}, {
			"id": "965",
			"name": "MTC - Health Technologies Center",
			"latitude": "40.57710636",
			"longitude": "-83.08814617",
			"address": "1475 Mt Vernon Ave",
			"buildingCode": null,
			"buildingNumber": "577",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=577&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "967",
			"name": "Library and Classroom Building",
			"latitude": "40.57699337",
			"longitude": "-83.08908396",
			"address": "1469 Mt Vernon Ave",
			"buildingCode": "LC",
			"buildingNumber": "597",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=597&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "969",
			"name": "Bryson Hall",
			"latitude": "40.57905932",
			"longitude": "-83.08933183",
			"address": "1467 Mt Vernon Ave",
			"buildingCode": "TE",
			"buildingNumber": "653",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=653&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "971",
			"name": "Marion Prairie Facility",
			"latitude": "40.57489095",
			"longitude": "-83.08759518",
			"address": "1470 Mt Vernon Ave",
			"buildingCode": null,
			"buildingNumber": "5002",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=5002&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "973",
			"name": "Morrill Hall",
			"latitude": "40.57927013",
			"longitude": "-83.09078117",
			"address": "1465 Mt Vernon Ave",
			"buildingCode": "MR",
			"buildingNumber": "627",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=627&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "975",
			"name": "Alber Student Center",
			"latitude": "40.57774988",
			"longitude": "-83.09060393",
			"address": "1463 Mt Vernon Ave",
			"buildingCode": "SD",
			"buildingNumber": "654",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=654&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "977",
			"name": "Science and Engineering Building",
			"latitude": "40.576888790855",
			"longitude": "-83.0904631357612",
			"address": "1459 Mt Vernon Ave",
			"buildingCode": "MS",
			"buildingNumber": "5004",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=5004&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}, {
			"id": "979",
			"name": "Maynard Hall",
			"latitude": "40.57849675",
			"longitude": "-83.09130269",
			"address": "1461 Mt Vernon Ave",
			"buildingCode": "MY",
			"buildingNumber": "670",
			"zipCode": "43302",
			"imageUrl": "https://www.osu.edu/map/buildingImg.php?id=670&size=mobile&nodefault=1",
			"categories": [],
			"departments": []
		}]
	}
}

export default jsonData;