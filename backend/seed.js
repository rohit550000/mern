import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();


// generate fake data

async function seedDatabase() {
    const feture = ['house','apartment','land','villa','bungalow'];
    const realEstateTitles = [
        "Luxury Villa with Ocean View",
        "Spacious Condo in the Heart of the City",
        "Cozy Cottage by the Lake",
        "Modern Apartment with Stunning Views",
        "Charming Townhouse in a Quiet Neighborhood",
        "Elegant Mansion with Beautiful Gardens",
        "Rustic Farmhouse Surrounded by Nature",
        "Luxurious Penthouse with Private Terrace",
        // Add more titles as needed
    ];

    const indiaLatitudes = [
        "28.6139", // Delhi
        "19.0760", // Mumbai
        "12.9716", // Bangalore
        "17.3850", // Hyderabad
        "22.5726", // Pune
        "26.9124", // Chennai
        "18.5204", // Kolkata
        "15.2993", // Ahmedabad
        "26.8467", // Jaipur
        "28.7041"  // Lucknow
        // Add more latitude coordinates as needed
    ];
    const indiaLongitudes = [
        "77.2090", // Delhi
        "72.8777", // Mumbai
        "77.5946", // Bangalore
        "78.4867", // Hyderabad
        "88.3639", // Pune
        "80.2496", // Chennai
        "73.8567", // Kolkata
        "74.1240", // Ahmedabad
        "75.7751", // Jaipur
        "77.1025"  // Lucknow
        // Add more longitude coordinates as needed
    ];

    const indianCities = [
        "delhi",
        "mumbai",
        "bangalore",
        "hyderabad",
        "pune",
        "chennai",
        "kolkata",
        "ahmedabad",
        "jaipur",
        "lucknow",
        // Add more city names as needed
    ];
    

    function generateFakeImageURL() {
        // Use Faker.js image placeholder service for fake image URLs
        return `https://via.placeholder.com/${getRandomNumber(400,800)}x${getRandomNumber(300,600)}`;
    }
    function getRandomNumber(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      }

      function getPropertys() {
        return feture[Math.floor(Math.random() * feture.length)]
      }

      function getPropertypes() {
        return realEstateTitles[Math.floor(Math.random() * realEstateTitles.length)]
      }
      function getlet() {
        return indiaLatitudes[Math.floor(Math.random() * indiaLatitudes.length)]
      }
      function getlon() {
        return indiaLongitudes[Math.floor(Math.random() * indiaLongitudes.length)]
      }

      function getCity() {
        return indianCities[Math.floor(Math.random() * indianCities.length)]
      }

  try {

    
    // Generate fake data for Model 1 (e.g., User)
    const users = Array.from({ length: 10 }, () => ({
        username: faker.person.firstName(),
        email: faker.internet.email(),
        password:'1234'
    }));

    // Generate fake data for Model 1 (e.g., User)
    const property = Array.from({ length: 20 }, () => ({
        title: getPropertypes(),
        desc: faker.lorem.paragraphs(5),
        price: getRandomNumber(1, 100),
        images: Array.from({ length: 4 }, generateFakeImageURL),
        address: getCity(),
        city: getCity(),
        bedroom: getRandomNumber(1,4),
        bathroom: getRandomNumber(1,4),
        latitude:getlet(),
        longitude:getlon(),
        property: getPropertys(),
    }));

    // Save fake data to the database for Model 1 (e.g., User)
    await prisma.client.createMany({
      data: users,
    });

    await prisma.propertyPost.createMany({
        data: property,
      });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();