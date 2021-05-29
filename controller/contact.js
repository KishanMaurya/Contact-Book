const apiController = require("../utility/apiController");
const { promisifyQueries } = require("../lib/helper");

class Contact {
  
  //add contact 
  async addContact(contact) {
    try {
      var created_at = new Date();  
      var check_sql = `select email , contact  from contact where email = '${contact.email}' AND contact = '${contact.contact}' `;
      var check_data = await promisifyQueries(check_sql);
      if (check_data.length > 0) {
        return apiController.respondBad("Duplicate items email and contact");
      }
      var params = [
            [
                contact.name,
                contact.email, 
                contact.contact,
                created_at
            ]
        ];
      var sql = `insert into contact (name,email,contact,created_at) values ?`;
      var data = await promisifyQueries(sql, [params]);
      return apiController.respondPost(data);
    } catch (err) {
      return apiController.respondBad(err);
    }
  }

  async getContactByLimit(contact) {
    //get details by paginaion 0 upto 10 par page 
    try {
      let skip = contact.skip || 0;
      let limit = contact.limit || 10;
      var query = `select id, name, email, contact ,created_at, updated_at from contact`;
      var countquery = `select count(id) as totalCount from contact`;
      var totalCount = await promisifyQueries(countquery);
      query += ` order by id DESC `;
      query += `LIMIT ${skip}, ${limit}`;
      var data = await promisifyQueries(query);
      let contactRes = {
        total_count: totalCount[0].totalCount,
        data: data,
      };
      return apiController.respondGet(contactRes);
    } catch (err) {
      return apiController.respondBad(err);
    }
  }

  async contactSearchByNameEmail(contact) {
    //search api by name email
    try {
      var sql = `SELECT * from contact where name='${contact.name}' AND email ='${contact.email}'`;
      var data = await promisifyQueries(sql);
      return apiController.respondGet(data);
    } catch (err) {
      return apiController.respondBad(err);
    }
  }
  //update contact
  async updateContact(contact) {
    try {
      var updated_at = new Date();
      var check_sql = `select email , contact  from contact where email = '${contact.email}' AND contact = '${contact.contact}' `;
      var check_data = await promisifyQueries(check_sql);
      if (check_data.length > 0) {
        return apiController.respondBad("Duplicate items email , contact  #");
      }
      var select_sql = `select * from contact where id = ${contact.id}`;
      var data = await promisifyQueries(select_sql);
      if (data == null || data == undefined) {
        return apiController.respondBad("No Work contact found");
      }
      var sql = `update contact set name=?, email=?,contact=?, updated_at=? where id=?`;
      var update_values = [
        contact.name ? contact.name : data.name,
        contact.email ? contact.email : data.email,
        contact.contact ? contact.contact : data.contact,
        updated_at,
        contact.id,
      ];
      var data = await promisifyQueries(sql, update_values);
      return apiController.respondPut(data);
    } catch (err) {
      return apiController.respondBad(err);
    }
  }
//delete contact
  async deleteContact(contact) {
    try {
      var delete_sql = `delete from contact where id=${contact.contact_id}`;
      var data = await promisifyQueries(delete_sql);
      return apiController.respondDelete(data);
    } catch (err) {
      return apiController.respondBad(err);
    }
  }
}

module.exports = new Contact();
