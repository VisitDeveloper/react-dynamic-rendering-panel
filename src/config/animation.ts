export const pageAnimation = {
    hidden :{
        opacity : 0 , 
        y :100 
    },
    show:{
        opacity: 1,
        y:0,
        transition:{
            duration:0.3,
            // when:'beforeChildren',
            // staggerChildren:0.25,
        }
    },
    exit:{
        opacity: 0,
        y:100,
        transition:{
            duration:0.3,

        }
    }
}


export const titleAnim = {
    hidden :{
        y:200
    },
    show:{
        y:0,
        transition:{duration:0.75,ease:'easeOut'}
    }

}

export const fadeAnime = {
    hidden :{opacity:0},
    show:{
        opacity:1,
        transition:{
            ease:'easeOut',
            duration:0.75
        }
    },
}

export const photoAnime ={
    hidden :{
        scale: 1.1 ,
        opacity: 0,
    },
    show:{
        scale : 1 ,
        opacity: 1,
        transition:{
            duration:0.75,
            ease:'easeOut'
        }
    }
}

export const lineAnim = {
    hidden : {
        width:'0%'
    },
    show:{
        width:'100%',
        transition: {duration : 1},
    }
}

export const slider = {
    hidden : {
        x:'-130%',
        skew:'45deg'
    },
    show:{
        x:'100%',
        skew:'0deg',
        transition: {ease:'easeOut',duration : 1},
    }
}

export const sliderContainer = {
    hidden : {
        opacity:1
    },
    show:{
        opacity:1,
        transition: {
            ease:'easeOut',
            duration : 1,
            staggerChildren:0.15
        },
    }
}

export const scrollReveal = {
     hidden:{ 
        opacity: 0,
        scale: 1.2,
        transition: {
        duration : 0.5,
        },
        },
    show:{
        opacity: 1,
        scale:1,
        transition: {
        duration : 0.5,
        },
     }
}
