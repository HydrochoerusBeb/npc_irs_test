
import React, { useState } from 'react';
import { generateTickets } from '../../data/generateTickets';
import { TicketList } from '../../components/TIcketList';
import { TicketDetails } from '../../components/TicketDetails';
import { TicketForm } from '../../components/TicketForm';
import { BackButton } from '../../reusable/BackButton/BackButton';
import { NavBar } from '../../reusable/NavBar/NavBar';
import s from './style.module.css'
import { Footer } from '../../reusable/Footer/Footer';

const initialTickets = generateTickets(100);

export const HelpDeskPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState(initialTickets);

  const handleNewTicket = (newTicket) => {
    setTickets([newTicket, ...tickets]);
  };

  return (
    <div className='start-screen'>
      <NavBar/>
    <div className={s.helpdesk_container} >
      <div className={s.Header_line}>
      <BackButton/>  <h1>Help Desk Tickets</h1>    
      </div>
      <div className={s.tickets_container}>
        <div className={s.ticket_list_container}>
          <TicketList tickets={tickets} onSelectTicket={setSelectedTicket} />
        </div>
        <div className={s.ticket_info}>
          <TicketDetails ticket={selectedTicket} />
          <TicketForm onSubmit={handleNewTicket} />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
