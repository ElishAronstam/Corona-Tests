export class Patient {
  constructor({
    id,
    full_name,
    address,
    dob,
    phone_number,
    cell,
    date_pos,
    date_neg,
    vax_date1,
    vax_date2,
    vax_date3,
    vax_date4,
    vax_creator1,
    vax_creator2,
    vax_creator3,
    vax_creator4,
  }) {
    this.id = id;
    this.fullName = full_name;
    this.address = address;
    this.dob = dob;
    this.phoneNumber = phone_number;
    this.cell = cell;
    this.datePos = date_pos;
    this.dateNeg = date_neg;
    this.vaxDate1 = vax_date1;
    this.vaxDate2 = vax_date2;
    this.vaxDate3 = vax_date3;
    this.vaxDate4 = vax_date4;
    this.vaxCreator1 = vax_creator1;
    this.vaxCreator2 = vax_creator2;
    this.vaxCreator3 = vax_creator3;
    this.vaxCreator4 = vax_creator4;
  }
}
