const quizData = [
  {
    question: "Who was the last Prophet in Islam?",
    a: "Prophet Musa",
    b: "Prophet Isa",
    c: "Prophet Muhammad",
    d: "Prophet Ibrahim",
    correct: "c"
  },
  {
    question: "What is the holy book of Islam called?",
    a: "Torah",
    b: "Bible",
    c: "Quran",
    d: "Psalms",
    correct: "c"
  },
  {
    question: "In which city was Prophet Muhammad (SAW) born?",
    a: "America",
    b: "Jerusalem",
    c: "Mecca",
    d: "Baghdad",
    correct: "c"
  },
  {
    question: "How many times do Muslims pray in a day?",
    a: "3",
    b: "5",
    c: "7",
    d: "2",
    correct: "b"
  },
  {
    question: "Which month do Muslims fast in?",
    a: "April",
    b: "Rajab",
    c: "Ramadan",
    d: "Dhul-Hijjah",
    correct: "c"
  },
  {
    question: "What is the declaration of faith in Islam called?",
    a: "Salah",
    b: "Shahada",
    c: "Zakah",
    d: "Sawm",
    correct: "b"
  },
  {
    question: "How many chapters are in the Quran?",
    a: "114",
    b: "100",
    c: "99",
    d: "120",
    correct: "a"
  },
  {
    question: "What is the first month of the Islamic calendar?",
    a: "Safar",
    b: "Ramadan",
    c: "Muharram",
    d: "January",
    correct: "c"
  },
  {
    question: "What is the pilgrimage to Mecca called?",
    a: "Zakat",
    b: "Hajj",
    c: "Umrah",
    d: "Sawm",
    correct: "b"
  },
  {
    question: "Which angel brought revelations to Prophet Muhammad (SAW)?",
    a: "Mikail",
    b: "Israfil",
    c: "Jibril",
    d: "Azrael",
    correct: "c"
  },
  {
    question: "What is the name of the Prophet Muhammad's (SAW) first wife?",
    a: "Aisha",
    b: "Fatimah",
    c: "Khadijah",
    d: "Maryam",
    correct: "c"
  },
  {
    question: "What is the second largest religion in the world?",
    a: "Christianity",
    b: "Islam",
    c: "Hinduism",
    d: "Buddhism",
    correct: "b"
  },
  {
    question: "What is the Arabic word for charity?",
    a: "Salah",
    b: "Sawm",
    c: "Zakah",
    d: "Hajj",
    correct: "c"
  },
  {
    question: "What night is better than a thousand months?",
    a: "Laylat al-Qadr",
    b: "Eid Night",
    c: "Hajj Night",
    d: "Ashura",
    correct: "a"
  },
  {
    question: "Which Surah is the longest in the Quran?",
    a: "Al-Baqarah",
    b: "Al-Fatiha",
    c: "Al-Ikhlas",
    d: "An-Nas",
    correct: "a"
  },
  {
    question: "How many pillars of Islam are there?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "c"
  },
  {
    question: "Which country has the largest Muslim population?",
    a: "Saudi Arabia",
    b: "Pakistan",
    c: "Indonesia",
    d: "Egypt",
    correct: "c"
  },
  {
    question: "What is the Arabic word for God in Islam?",
    a: "Elohim",
    b: "Allah",
    c: "Yahweh",
    d: "Jehovah",
    correct: "b"
  },
  {
    question: "Which Prophet split the sea by Allah's command?",
    a: "Prophet Muhammad",
    b: "Prophet Musa",
    c: "Prophet Ibrahim",
    d: "Prophet Isa",
    correct: "b"
  },
  {
    question: "Which day is considered the best day of the week in Islam?",
    a: "Friday (Jumu'ah)",
    b: "Monday",
    c: "Sunday",
    d: "Saturday",
    correct: "a"
  },
  // {
    question: "Which city is called the City of the Prophet?",
    a: "Mecca",
    b: "Medina",
    c: "Jerusalem",
    d: "Baghdad",
    correct: "b"
},
{
    question: "How many sons did Prophet Yaqub (Jacob) have?",
    a: "10",
    b: "12",
    c: "7",
    d: "5",
    correct: "b"
},
{
    question: "Which Prophet is known as Khalilullah (Friend of Allah)?",
    a: "Prophet Musa",
    b: "Prophet Isa",
    c: "Prophet Ibrahim",
    d: "Prophet Yusuf",
    correct: "c"
},
{
    question: "Who built the Kaaba along with his son?",
    a: "Prophet Nuh",
    b: "Prophet Ibrahim",
    c: "Prophet Musa",
    d: "Prophet Muhammad",
    correct: "b"
},
{
    question: "Which Surah is known as the Heart of the Quran?",
    a: "Surah Al-Fatiha",
    b: "Surah Al-Baqarah",
    c: "Surah Yasin",
    d: "Surah Ikhlas",
    correct: "c"
},
{
    question: "What was the first word revealed in the Quran?",
    a: "Iqra (Read)",
    b: "Salah (Pray)",
    c: "Sabr (Patience)",
    d: "Tawheed (Oneness)",
    correct: "a"
},
{
    question: "Which angel is responsible for blowing the trumpet on the Day of Judgment?",
    a: "Jibril",
    b: "Israfil",
    c: "Mikail",
    d: "Azrael",
    correct: "b"
},
{
    question: "Which Prophet's staff turned into a serpent by Allah's command?",
    a: "Prophet Isa",
    b: "Prophet Musa",
    c: "Prophet Nuh",
    d: "Prophet Ibrahim",
    correct: "b"
},
{
    question: "How many days did Allah take to create the heavens and the earth?",
    a: "5",
    b: "7",
    c: "6",
    d: "8",
    correct: "c"
},
{
    question: "Who was the first person to accept Islam after Prophet Muhammad (SAW)?",
    a: "Abu Bakr",
    b: "Ali ibn Abi Talib",
    c: "Umar ibn Al-Khattab",
    d: "Uthman ibn Affan",
    correct: "b"
},
{
    question: "What is the reward for reading one letter of the Quran?",
    a: "1 reward",
    b: "10 rewards",
    c: "5 rewards",
    d: "100 rewards",
    correct: "b"
},
{
    question: "What is the name of the Islamic pilgrimage that is voluntary and can be performed anytime?",
    a: "Hajj",
    b: "Umrah",
    c: "Zakat",
    d: "Jihad",
    correct: "b"
},
{
    question: "Who was the mother of Prophet Isa (Jesus)?",
    a: "Khadijah",
    b: "Fatimah",
    c: "Maryam",
    d: "Asiya",
    correct: "c"
},
{
    question: "Which Prophet was swallowed by a big fish?",
    a: "Prophet Musa",
    b: "Prophet Yunus",
    c: "Prophet Isa",
    d: "Prophet Nuh",
    correct: "b"
},
{
    question: "In which Surah is Ayat al-Kursi found?",
    a: "Surah Al-Baqarah",
    b: "Surah Al-Fatiha",
    c: "Surah An-Nisa",
    d: "Surah Al-Ikhlas",
    correct: "a"
},
{
    question: "How many months are sacred in Islam?",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    correct: "b"
},
{
    question: "Which battle is known as the first major battle in Islam?",
    a: "Battle of Uhud",
    b: "Battle of Badr",
    c: "Battle of Tabuk",
    d: "Battle of Khandaq",
    correct: "b"
},
{
    question: "Which Prophet was commanded to build an Ark?",
    a: "Prophet Ibrahim",
    b: "Prophet Nuh",
    c: "Prophet Musa",
    d: "Prophet Muhammad",
    correct: "b"
},
{
    question: "What does 'Sawm' refer to in Islam?",
    a: "Charity",
    b: "Fasting",
    c: "Prayer",
    d: "Pilgrimage",
    correct: "b"
},
{
    question: "Who is known as the Seal of the Prophets?",
    a: "Prophet Isa",
    b: "Prophet Musa",
    c: "Prophet Muhammad",
    d: "Prophet Dawud",
    correct: "c"
}
{
    question: "How many obligatory daily prayers are there in Islam?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "c"
},
{
    question: "In which month was the Quran first revealed?",
    a: "Rajab",
    b: "Ramadan",
    c: "Sha'ban",
    d: "Muharram",
    correct: "b"
},
{
    question: "Which Surah is the longest in the Quran?",
    a: "Surah Al-Baqarah",
    b: "Surah Al-Imran",
    c: "Surah An-Nisa",
    d: "Surah Al-A'raf",
    correct: "a"
},
{
    question: "Who was the first woman to embrace Islam?",
    a: "Fatimah",
    b: "Aisha",
    c: "Khadijah",
    d: "Asiya",
    correct: "c"
},
{
    question: "Which angel brings revelation to the Prophets?",
    a: "Mikail",
    b: "Israfil",
    c: "Azrael",
    d: "Jibril",
    correct: "d"
},
{
    question: "What is the night called when the Quran was first revealed?",
    a: "Laylat al-Qadr",
    b: "Laylat al-Miraj",
    c: "Laylat al-Isra",
    d: "Laylat al-Barat",
    correct: "a"
},
{
    question: "Which Prophet could interpret dreams?",
    a: "Prophet Musa",
    b: "Prophet Yusuf",
    c: "Prophet Dawud",
    d: "Prophet Ibrahim",
    correct: "b"
},
{
    question: "Which day is considered the best day of the week in Islam?",
    a: "Monday",
    b: "Friday",
    c: "Saturday",
    d: "Sunday",
    correct: "b"
},
{
    question: "Which Surah is known for its protection from evil?",
    a: "Surah Al-Ikhlas",
    b: "Surah Al-Falaq",
    c: "Surah Al-Kafirun",
    d: "Surah Al-Ma'un",
    correct: "b"
},
{
    question: "How many chapters (Surahs) are in the Quran?",
    a: "114",
    b: "113",
    c: "112",
    d: "111",
    correct: "a"
},
{
    question: "What is the term for charity given annually in Islam?",
    a: "Sadaqah",
    b: "Hajj",
    c: "Zakat",
    d: "Fitrah",
    correct: "c"
},
{
    question: "Which Prophet parted the sea by Allah’s permission?",
    a: "Prophet Nuh",
    b: "Prophet Musa",
    c: "Prophet Isa",
    d: "Prophet Ibrahim",
    correct: "b"
},
{
    question: "What is the Islamic term for lawful food?",
    a: "Halal",
    b: "Haram",
    c: "Tayyib",
    d: "Zabiha",
    correct: "a"
},
{
    question: "How many articles of faith (Iman) are there in Islam?",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    correct: "c"
},
{
    question: "Which country is home to the Al-Aqsa Mosque?",
    a: "Egypt",
    b: "Saudi Arabia",
    c: "Palestine",
    d: "Syria",
    correct: "c"
},
{
    question: "What is the meaning of 'Islam'?",
    a: "Peace",
    b: "Submission",
    c: "Prayer",
    d: "Charity",
    correct: "b"
},
{
    question: "Which Prophet was known for his wisdom and judgement?",
    a: "Prophet Suleiman",
    b: "Prophet Dawud",
    c: "Prophet Yusuf",
    d: "Prophet Isa",
    correct: "b"
},
{
    question: "How many companions participated in the first battle, Badr?",
    a: "313",
    b: "500",
    c: "1000",
    d: "1500",
    correct: "a"
},
{
    question: "What was the name of Prophet Muhammad’s (SAW) father?",
    a: "Abu Talib",
    b: "Abdullah",
    c: "Abdul Muttalib",
    d: "Hashim",
    correct: "b"
},
{
    question: "Which month marks the beginning of the Islamic calendar?",
    a: "Ramadan",
    b: "Muharram",
    c: "Safar",
    d: "Rajab",
    correct: "b"
}
{
    question: "Which Surah is called the Heart of the Quran?",
    a: "Surah Al-Falaq",
    b: "Surah Al-Ikhlas",
    c: "Surah Yasin",
    d: "Surah Al-Baqarah",
    correct: "c"
},
{
    question: "What does 'Bismillah' mean?",
    a: "Praise be to Allah",
    b: "In the name of Allah",
    c: "There is no god but Allah",
    d: "Allah is the Greatest",
    correct: "b"
},
{
    question: "Who built the Kaaba first?",
    a: "Prophet Muhammad (SAW)",
    b: "Prophet Musa",
    c: "Prophet Ibrahim and Ismail",
    d: "Prophet Dawud",
    correct: "c"
},
{
    question: "What is the name of the Islamic call to prayer?",
    a: "Iqamah",
    b: "Adhan",
    c: "Takbir",
    d: "Shahadah",
    correct: "b"
},
{
    question: "How many sons did Prophet Yaqub (Jacob) have?",
    a: "10",
    b: "12",
    c: "14",
    d: "7",
    correct: "b"
},
{
    question: "Which prayer is offered immediately after sunset?",
    a: "Maghrib",
    b: "Isha",
    c: "Fajr",
    d: "Dhuhr",
    correct: "a"
},
{
    question: "Which city is known as the 'City of the Prophet'?",
    a: "Makkah",
    b: "Jerusalem",
    c: "Madina",
    d: "Baghdad",
    correct: "c"
},
{
    question: "What is the Islamic pilgrimage to Makkah called?",
    a: "Zakat",
    b: "Umrah",
    c: "Hajj",
    d: "Sawm",
    correct: "c"
},
{
    question: "Which Prophet is known to have built an Ark?",
    a: "Prophet Nuh (Noah)",
    b: "Prophet Ibrahim",
    c: "Prophet Musa",
    d: "Prophet Yusuf",
    correct: "a"
},
{
    question: "In Islam, who is known as 'Khatam an-Nabiyyin' (Seal of the Prophets)?",
    a: "Prophet Isa",
    b: "Prophet Musa",
    c: "Prophet Muhammad (SAW)",
    d: "Prophet Yusuf",
    correct: "c"
},
{
    question: "Which Islamic month is Hajj performed in?",
    a: "Ramadan",
    b: "Dhul-Hijjah",
    c: "Muharram",
    d: "Safar",
    correct: "b"
},
{
    question: "What is the Islamic greeting?",
    a: "Alhamdulillah",
    b: "SubhanAllah",
    c: "As-Salamu Alaikum",
    d: "Bismillah",
    correct: "c"
},
{
    question: "Who was swallowed by a whale according to Islamic tradition?",
    a: "Prophet Musa",
    b: "Prophet Yunus",
    c: "Prophet Isa",
    d: "Prophet Zakariya",
    correct: "b"
},
{
    question: "Which Prophet spoke in infancy?",
    a: "Prophet Isa (Jesus)",
    b: "Prophet Muhammad (SAW)",
    c: "Prophet Musa",
    d: "Prophet Yusuf",
    correct: "a"
},
{
    question: "What is the name of the event where the Prophet Muhammad (SAW) ascended to the heavens?",
    a: "Hijrah",
    b: "Isra and Miraj",
    c: "Hudaibiyah",
    d: "Fath Makkah",
    correct: "b"
},
{
    question: "Who was the first Caliph after Prophet Muhammad (SAW)?",
    a: "Umar ibn Khattab",
    b: "Ali ibn Abi Talib",
    c: "Uthman ibn Affan",
    d: "Abu Bakr As-Siddiq",
    correct: "d"
},
{
    question: "Which Prophet is associated with patience (Sabr)?",
    a: "Prophet Ayyub (Job)",
    b: "Prophet Musa",
    c: "Prophet Isa",
    d: "Prophet Muhammad (SAW)",
    correct: "a"
},
{
    question: "Which angel is responsible for blowing the trumpet on the Day of Judgment?",
    a: "Jibril",
    b: "Mikail",
    c: "Israfil",
    d: "Azrael",
    correct: "c"
},
{
    question: "How old was Prophet Muhammad (SAW) when he received his first revelation?",
    a: "30",
    b: "35",
    c: "40",
    d: "45",
    correct: "c"
},
{
    question: "What is the term for the Islamic fast-breaking meal at sunset?",
    a: "Suhoor",
    b: "Iftar",
    c: "Fajr",
    d: "Maghrib",
    correct: "b"
}
{
    question: "What is the term for the Islamic law derived from the Quran and Hadith?",
    a: "Fatwa",
    b: "Sharia",
    c: "Fiqh",
    d: "Sunnah",
    correct: "b"
},
{
    question: "Which Prophet is known for building a great ship to save humanity?",
    a: "Prophet Musa",
    b: "Prophet Nuh",
    c: "Prophet Isa",
    d: "Prophet Dawud",
    correct: "b"
},
{
    question: "What is the reward for fasting during Ramadan according to Islam?",
    a: "Forgiveness of sins",
    b: "Entry to Paradise",
    c: "Both A and B",
    d: "Wealth",
    correct: "c"
},
{
    question: "Which pillar of Islam involves giving 2.5% of one's savings to the needy?",
    a: "Salah",
    b: "Hajj",
    c: "Zakat",
    d: "Shahada",
    correct: "c"
},
{
    question: "What is the name of the Prophet Muhammad’s (SAW) mother?",
    a: "Khadijah",
    b: "Fatimah",
    c: "Aminah",
    d: "Asiya",
    correct: "c"
},
{
    question: "Which Surah must be recited in every unit of Salah?",
    a: "Surah Al-Ikhlas",
    b: "Surah Al-Falaq",
    c: "Surah Al-Fatiha",
    d: "Surah An-Nas",
    correct: "c"
},
{
    question: "What is the meaning of 'Alhamdulillah'?",
    a: "Glory be to Allah",
    b: "Praise be to Allah",
    c: "In the name of Allah",
    d: "Allah is Great",
    correct: "b"
},
{
    question: "How many days are Muslims required to fast in Ramadan?",
    a: "29 or 30 days",
    b: "27 days",
    c: "31 days",
    d: "28 days",
    correct: "a"
},
{
    question: "Which Prophet is known for being thrown into a fire but was unharmed?",
    a: "Prophet Yusuf",
    b: "Prophet Ibrahim",
    c: "Prophet Musa",
    d: "Prophet Isa",
    correct: "b"
},
{
    question: "Who was the second Caliph of Islam after Abu Bakr (RA)?",
    a: "Uthman ibn Affan",
    b: "Ali ibn Abi Talib",
    c: "Umar ibn Khattab",
    d: "Muawiyah",
    correct: "c"
},
{
    question: "Which animal is mentioned as being ridden during Isra and Miraj?",
    a: "Horse",
    b: "Buraq",
    c: "Camel",
    d: "Donkey",
    correct: "b"
},
{
    question: "What is the Arabic word for Friday?",
    a: "Sabt",
    b: "Ahad",
    c: "Jumu'ah",
    d: "Khamis",
    correct: "c"
},
{
    question: "What is the place called where souls wait for the Day of Judgment?",
    a: "Jannah",
    b: "Barzakh",
    c: "Jahannam",
    d: "Sidrat al-Muntaha",
    correct: "b"
},
{
    question: "Which Prophet was able to speak with animals?",
    a: "Prophet Musa",
    b: "Prophet Dawud",
    c: "Prophet Suleiman",
    d: "Prophet Ibrahim",
    correct: "c"
},
{
    question: "Which Prophet's staff turned into a serpent?",
    a: "Prophet Ibrahim",
    b: "Prophet Musa",
    c: "Prophet Isa",
    d: "Prophet Harun",
    correct: "b"
},
{
    question: "Which Surah has no Bismillah at its beginning?",
    a: "Surah Al-Tawbah",
    b: "Surah Al-Anfal",
    c: "Surah Al-Falaq",
    d: "Surah Al-Ma'un",
    correct: "a"
},
{
    question: "What is the term for seeking forgiveness from Allah?",
    a: "Istighfar",
    b: "Tahajjud",
    c: "Tasbeeh",
    d: "Shukr",
    correct: "a"
},
{
    question: "Who is known as the friend of Allah (Khalilullah)?",
    a: "Prophet Isa",
    b: "Prophet Muhammad (SAW)",
    c: "Prophet Ibrahim",
    d: "Prophet Musa",
    correct: "c"
},
{
    question: "How many Makki Surahs are there in the Quran?",
    a: "87",
    b: "86",
    c: "88",
    d: "89",
    correct: "b"
},
{
    question: "Which month is known as the 'Month of Allah'?",
    a: "Ramadan",
    b: "Muharram",
    c: "Safar",
    d: "Dhul-Hijjah",
    correct: "b"
}
{
    question: "What is the name of the night when the Quran was first revealed?",
    a: "Laylat al-Qadr",
    b: "Laylat al-Bara'ah",
    c: "Laylat al-Isra",
    d: "Laylat al-Miraj",
    correct: "a"
},
{
    question: "Which Prophet could cure the blind and the leper by Allah's permission?",
    a: "Prophet Musa",
    b: "Prophet Isa (Jesus)",
    c: "Prophet Muhammad (SAW)",
    d: "Prophet Dawud",
    correct: "b"
},
{
    question: "What is the Islamic term for charity beyond Zakat?",
    a: "Sadaqah",
    b: "Kaffarah",
    c: "Fidya",
    d: "Nafl",
    correct: "a"
},
{
    question: "Which angel is responsible for bringing revelation?",
    a: "Israfil",
    b: "Mikail",
    c: "Jibril (Gabriel)",
    d: "Azrael",
    correct: "c"
},
{
    question: "What is the first month of the Islamic calendar?",
    a: "Ramadan",
    b: "Muharram",
    c: "Safar",
    d: "Rajab",
    correct: "b"
},
{
    question: "How many parts (Juz) is the Quran divided into?",
    a: "20",
    b: "30",
    c: "40",
    d: "50",
    correct: "b"
},
{
    question: "Which Prophet was tested with severe illness and remained patient?",
    a: "Prophet Musa",
    b: "Prophet Ayyub",
    c: "Prophet Isa",
    d: "Prophet Muhammad (SAW)",
    correct: "b"
},
{
    question: "What is the sacred mosque in Makkah called?",
    a: "Masjid an-Nabawi",
    b: "Al-Aqsa Mosque",
    c: "Masjid al-Haram",
    d: "Masjid Quba",
    correct: "c"
},
{
    question: "Which Prophet was known for his beautiful dream interpretations?",
    a: "Prophet Yusuf",
    b: "Prophet Isa",
    c: "Prophet Musa",
    d: "Prophet Dawud",
    correct: "a"
},
{
    question: "What is the Arabic word for the Islamic pilgrimage?",
    a: "Umrah",
    b: "Hajj",
    c: "Sawm",
    d: "Zakat",
    correct: "b"
},
{
    question: "What does 'SubhanAllah' mean?",
    a: "Glory be to Allah",
    b: "Allah is the Greatest",
    c: "There is no god but Allah",
    d: "In the name of Allah",
    correct: "a"
},
{
    question: "How many obligatory prayers (Salah) are there daily in Islam?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "c"
},
{
    question: "Which companion was known as 'The Sword of Allah'?",
    a: "Khalid ibn Al-Walid",
    b: "Umar ibn Khattab",
    c: "Ali ibn Abi Talib",
    d: "Bilal ibn Rabah",
    correct: "a"
},
{
    question: "What is the shortest Surah in the Quran?",
    a: "Surah Al-Kawthar",
    b: "Surah Al-Falaq",
    c: "Surah An-Nas",
    d: "Surah Al-Ikhlas",
    correct: "a"
},
{
    question: "Which animal spoke to Prophet Salih’s people?",
    a: "Camel",
    b: "Cow",
    c: "Dog",
    d: "Bird",
    correct: "a"
},
{
    question: "What is the term for the 'Oneness of Allah' in Islam?",
    a: "Sunnah",
    b: "Tawheed",
    c: "Shirk",
    d: "Iman",
    correct: "b"
},
{
    question: "Which battle is called the first major battle in Islam?",
    a: "Battle of Badr",
    b: "Battle of Uhud",
    c: "Battle of Tabuk",
    d: "Battle of Khandaq",
    correct: "a"
},
{
    question: "What is the special prayer performed during Ramadan nights?",
    a: "Tahajjud",
    b: "Witr",
    c: "Taraweeh",
    d: "Fajr",
    correct: "c"
},
{
    question: "Who was the first muezzin (caller to prayer) in Islam?",
    a: "Umar ibn Khattab",
    b: "Bilal ibn Rabah",
    c: "Abu Bakr",
    d: "Ali ibn Abi Talib",
    correct: "b"
},
{
    question: "How many Surahs are in the Quran?",
    a: "112",
    b: "113",
    c: "114",
    d: "115",
    correct: "c"
}

];

// Shuffle and select only 10 questions
const quizData = shuffleArray(fullQuizData).slice(0, 10);

// DOM Elements
const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Functions
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  options[0].innerText = currentQuizData.a;
  options[1].innerText = currentQuizData.b;
  options[2].innerText = currentQuizData.c;
  options[3].innerText = currentQuizData.d;
}

function deselectAnswers() {
  options.forEach(option => {
    option.style.backgroundColor = "#f1f1f1";
    option.disabled = false;
  });
}

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(btn => btn.disabled = true);
    const answer = option.id;
    if (answer === quizData[currentQuiz].correct) {
      option.style.backgroundColor = "#00C897"; // Green
      score++;
    } else {
      option.style.backgroundColor = "#FF6B6B"; // Red
    }
  });
});

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResults();
  }
});

function showResults() {
  quiz.innerHTML = `
    <h2>🎉 You scored ${score}/${quizData.length}!</h2>
    <button onclick="location.reload()" class="restart-btn">Play Again</button>
  `;
}

// Shuffle array
function shuffleArray(array) {
  const shuffled = array.slice(); // clone
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
