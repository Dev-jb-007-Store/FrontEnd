/*
Department of Metallurgical and Materials Engineering
Indian Institute of Technology Roorkee
End Term Exam Spring 2020-21
Maximum marks 50	Time 2 to 4 hours

Instructions: This is open notes, open book, open internet online exam.
However students are strictly not allowed to consult any person in the world during the exam.

//First save this file as YourEnrollmentId.cpp//
After completion of exam, send only this updated file through email. No other file should be sent. Otherwise, your email might be rejected by IIT server considering it as virus threat.

You are provided with a part of code and functional specifications under comments.
You are required to write code accordingly.

Function initrese() is fully defined. You are required to comment it in function main() after first run.
*/

#include <iostream>
#include <cstring>
#include <fstream>
#include <ctime>
#include <conio.h>
using namespace std;
time_t t; // t passed as argument in function time()
struct tm * tt; // declaring variable for localtime()

struct customer{
	char phone[22];
	char name[20];
	char address[50];
};

struct reservation{
	int yearday, month, date;
	int customerid[20];//note that array index is hotel room number.
};
class Room
{
public:
int roomnumber;
int status;

class Room addRoom(int);
void searchRoom(int);
void deleteRoom(int);
void displayRoom(Room);
};

class Room rooms[150];
int count=0;
Room Room::addRoom(int rno)
{
class Room room;
room.roomnumber=rno;
}

void Room::searchRoom(int rno)
{
int i,found=0;
for(i=0;i<count;i++)
{
if(rooms[i].roomnumber==rno)
{
found=1;
break;
}
}
if(found==1)
{
cout<<"Room Details\n";
if(rooms[i].status==1)
{
cout<<"\nRoom is Reserved";
}		
else
{
cout<<"\nRoom is available";
}
displayRoom(rooms[i]);
getch();
}
else
{
cout<<"\nRoom not found";
getch();
}
}

reservation rese[366];

void addcust(){
//	Max Marks 5
//You are required to add customer in a
// customer file with attributes as given in struct customer.

{
int i,found=0,rno;

class Room room;
cout<<"\nEnter Room number : ";
cin>>rno;
for(i=0;i<count;i++)
{
if(rooms[i].roomnumber==rno)
{
found=1;
break;
}
}
if(found==1)
{
if(rooms[i].status==1)
{
cout<<"\nRoom is already Booked";
getch();
return;
}

cout<<"\nEnter booking id: ";
cin>>rooms[i].id;

cout<<"\nEnter Customer Name (First Name): ";
cin>>rooms[i].name;

cout<<"\nEnter Address (only city): ";
cin>>rooms[i].address;

cout<<"\nEnter Phone: ";
cin>>rooms[i].phone;

if (rnew)
    {
        custFile.open("custFile.txt", ios::out | ios::app | ios::binary );
    }
    else if (mod)
    {
       custFile.open("custFile.txt", ios::in | ios::out | ios::binary);
       
    }
 
    if (custFile.fail())
    {
        cout << "\nError opening file.\n";
        return;
    }
    
    custFile.write(reinterpret_cast<char *>(&c), sizeof(c));
    if (custFile.fail())
    {
        cout << "\nError writing record to file.\n";
    }
    else
    {
        cout << "\nRecord written to file.\n\n";
        custFile.seekp(fp, ios::beg);
        cin.get();
    }
 
   custFile.close();
 
}
}

int searchcustbyid(int id){
//	Max Marks 10
// search customer details with their id. Note that no id is stored	in a customer file.
//id is basically the number of record in customer file starting from 0.
int i;
cout << "Enter id"<<endl;
cin >> i;
while (int i = id)
}

void searchcustbyphone(){
//	Max Marks 5
//search customer by phone number and display all the attributes including customer id.	
}

void searchcustomerbooking(){
//	Max Marks 5
//search customer booking throughout the year using customer id.	
}

void enquirerese(){
//	Max Marks 5
//Display all the rooms available for booking on a particular date. 
//Note that rooms with customer id == -1 are available.
}

void booking(){
//	Max Marks 10
//First search customer in customer file by calling searchcustomerbyphone() in main menu. 
//If customer exist and if room is vacant, book the room by updating customer ID.
//If customer do not exist, call addcustomer in main menu. Then do the booking. 	
}
void cancelbooking(){
//	Max Marks 10
//Cancel the booking if customer booking exist for the rooms on a particular date.
}

void readrese(){//Fully defined. Students not to do anything in it.
//Read file "reservationbin.txt" and initialize global variable rese.
ifstream ihs;
ihs.open("reservationbin.txt", ios::in|ios::binary);
ihs.read( (char *) & rese, sizeof(rese));
ihs.close();
}

void writerese(){//Fully defined. Students not to do anything in it.
//update file "reservationbin.txt" with current value of global variable rese.
ofstream ohs;
ohs.open("reservationbin.txt", ios::out|ios::binary);
ohs.write( (char *) & rese, sizeof(rese));
ohs.close();
}


void initrese(){//Fully defined. Students not to do anything in it.
	time_t t0, t1=1577860200;
for (int i=0;i<366;i++)	
{t0 = t1 +24*3600*i;
	tm* tp = localtime(&t0);
	rese[i].date = tp->tm_mday;
	rese[i].month = tp->tm_mon+1;
	rese[i].yearday= tp->tm_yday;
//	cout<<endl<<rese[i].yearday<<' '<<rese[i].date<<' '<<rese[i].month<<' ';
	for(int j=0;j<20;j++){
		rese[i].customerid[j]=-1;
//		cout<<rese[i].customerid[j]<<' ';
	}
}
ofstream ohs;
ohs.open("reservationbin.txt", ios::out|ios::binary);
ohs.write( (char *) & rese, sizeof(rese));
ohs.close();
}

int main()
{
// initrese(); //comment this after first run
readrese();
cout<<"Welcome to Hotel Management Software\n";
int x;
xx:
cout<<"Press 0 for availability"<<endl;
cout<<"Press 1 for search customer by phone no."<<endl;
cout<<"Press 2 for search customer by id"<<endl;
cout<<"Press 3 for adding new customer"<<endl;
cout<<"Press 4 for reservation"<<endl;
cout<<"Press 5 to search customer reservation"<<endl;
cout<<"Press 6 to cancel reservation"<<endl;
cout<<"Press 7 to exit"<<endl;


cin>>x;

switch(x){
	case 0:{enquirerese();	break;	}
	case 1:{searchcustbyphone();break;	}
	case 2:{long id; cout<<"Enter customer id\n";
				cin >>id;
				 searchcustbyid(id); break; }
	case 3:{addcust(); break; }
	case 4:{booking(); break; }
	case 5:{searchcustomerbooking(); break; }
	case 6:{cancelbooking(); break; }
}

if(x!=7)
goto xx;

writerese();

}

