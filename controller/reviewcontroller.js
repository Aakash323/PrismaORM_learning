import prisma from "../configdb/db.config.js";

export const addReview = async (req, res) => {
  const { revText } = req.body;
  const { userId, pid } = req.params; // here we can use middleware to get userid and productId from params in real projects

  const rev = await prisma.review.create({
    data: {
      rev: revText,
      review_p_id: parseInt(pid),
      review_u_id: parseInt(userId),
    },      
  });
  if (rev) {
    return res.json({ status: 200, msg: "Review added sucessfully" });
  } else {
    return res.json({ status: 400, msg: "Cannot Add Review" });
  }
};

export const updateReview = async (req, res) => {
  const { revText } = req.body;
  const { userId, pid } = req.params;

  const reviews = await prisma.review.update({
    where: {
      review_u_id_review_p_id: {
        review_u_id: parseInt(userId),  
        review_p_id: parseInt(pid),
      },
    },
    data: {
      rev: revText,
    },
  });

  if (reviews) {
    return res.json({ status: 200, msg: "Review updated sucessfully" });
  } else {
    return res.json({ status: 400, msg: "cannot update review" });
  }
};

export const fetchReview = async (req, res) => {
        const { userId, pid } = req.params;

  const readData = await prisma.review.findMany({
     where: {
       
        review_u_id: parseInt(userId),  
        review_p_id: parseInt(pid),
    },
  });
  if (readData) {
    return res.json({
      status: 200,
      msg: "Review fetched sucessfully",
      data: readData,
    });
  } else {
    return res.json({ status: 400, msg: "cannot fetch review" });
  }
};

export const deleteReview = async (req, res) => {
  const {userId,pid} = req.params

  const del = await prisma.review.deleteMany({
   where: {
       
        review_u_id: parseInt(userId),  
        review_p_id: parseInt(pid),
    },
  });
  if (del.count>0) {
    return res.json({ status: 200, msg: "Review delete sucessfully" });
  } else {
    return res.json({ status: 400, msg: "cannot delete review" });
  }
};
