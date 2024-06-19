import Image from 'next/image';


const people = [
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  },
  {
    id: 2,
    name: 'Harry Sigei',
    organization: 'Zippy Events',
    imageUrl: '/together.jpg',
  },
  {
    id: 1,
    name: 'Morris Kamweru',
    organization: 'Zippy Events',
    imageUrl: '/boardstuff.jpg',
  }, 
];


const defaultImageUrl = ''

const PeopleList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <div key={person.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <div className="w-24 h-24 mb-4">
            <Image
              src={person.imageUrl}
              alt={`${person.name}'s profile picture`}
              width={96}
              height={96}
              className="rounded-full bg-gray-300"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">{person.name}</h3>
            <p className="text-gray-600">{person.organization}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;