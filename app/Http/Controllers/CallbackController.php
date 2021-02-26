<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Callback;

class CallbackController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->input('all')) {
            $callbacks = Callback::orderBy('id', 'DESC')->get();
        } else {
            $callbacks = Callback::with('user', 'comments')->orderBy('id', 'DESC')->paginate(10);
        }
        return response()->json(['data' => $callbacks], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'order_number' => 'string',
            'description' => 'required|string',
            'date_time' => 'required'
        ]);

        $callbacks = Callback::create([
            'user_id' => auth()->user()->id,
            'order_number' => $request->order_number,
            'description' => $request->description,
            'date_time' => $request->date_time,
        ]);

        return response()->json(['data' => $callbacks, 'message' => 'Created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'order_number' => 'required|string|max:255',
            'description' => 'required|string',
            'date_time' => 'required'
        ]);

        $callbacks = Callback::findOrFail($id);

        if(auth("api")->user()->id !== $callbacks->user_id) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $callbacks = Callback::where('id', $id)->update(
            array(
                'order_number' => $request->order_number,
                'description' => $request->description,
                'date_time' => $request->date_time,
            )
        );

        return response()->json(['data' => $callbacks, 'message' => 'Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $callbacks = Callback::findOrFail($id);

        if(auth("api")->user()->id !== $callbacks->user_id) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $callbacks->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
